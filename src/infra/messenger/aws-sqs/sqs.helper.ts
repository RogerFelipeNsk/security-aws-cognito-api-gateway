/* import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { getCredentials } from '@src/infra/credentials/aws';

const region = process.env.PROVIDER_REGION || 'us-east-1';
let sqsClient: SQSClient;

const isLocal = process.env.IS_OFFLINE;

if (isLocal) {
  const creds = getCredentials();
  sqsClient = new SQSClient({ region, credentials: creds });
} else {
  sqsClient = new SQSClient({ region });
}

export { sqsClient, SendMessageCommand };
 */
