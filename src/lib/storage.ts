import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const endpoint = process.env.AWS_ENDPOINT_URL_S3 ?? "";
const region = process.env.AWS_REGION ?? "us-east-1";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID ?? "";
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY ?? "";
const bucket = process.env.AWS_S3_BUCKET ?? "assets";

if (!endpoint || !accessKeyId || !secretAccessKey) {
  throw new Error("Object Storage environment variables are not set");
}

function makeClient() {
  return new S3Client({
    endpoint,
    region,
    credentials: { accessKeyId, secretAccessKey },
    forcePathStyle: true,
  });
}

export const objectStorage = makeClient();

export type ListBucketObjectsInput = {
  bucket?: string;
  prefix?: string;
  maxKeys?: number;
};

export type StoredObject = {
  key: string;
  size?: number;
};

export async function listBucketObjects(input: ListBucketObjectsInput = {}): Promise<StoredObject[]> {
  const client = input.bucket ? makeClient() : objectStorage;
  const command = new ListObjectsV2Command({
    Bucket: input.bucket ?? bucket,
    ...(input.prefix ? { Prefix: input.prefix } : {}),
    ...(input.maxKeys ? { MaxKeys: input.maxKeys } : {}),
  });
  const response = await client.send(command);
  const contents = response.Contents ?? [];
  return contents
    .filter((entry) => !entry.Key?.endsWith("/"))
    .map((entry) => ({ key: entry.Key ?? "", size: entry.Size }));
}
