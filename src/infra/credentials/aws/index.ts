import { fromIni } from "@aws-sdk/credential-providers";
const region = "us-east-1";

const getCredentials = (profile: string) => {
  const credentials = fromIni({
    profile,
    clientConfig: { region },
  });
  return credentials;
};

export { getCredentials };
