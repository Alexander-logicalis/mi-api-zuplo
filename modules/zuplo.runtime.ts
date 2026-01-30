import {
  environment,
  AkamaiApiSecurityPlugin,
  RuntimeExtensions,
  ZuploContext,
  ZuploRequest,
} from "@zuplo/runtime";

export function runtimeInit(runtime: RuntimeExtensions) {
  runtime.addPlugin(
    new AkamaiApiSecurityPlugin({
      hostname: "att-mexico.nonamesec.com",
      // index, provided by Akamai API Security
      index: 2,
      // Key provided by Akamai API Security
      key: environment.AKAMAI_API_SECURITY_KEY,
      // Enable the active prevention/protection feature
      enableProtection: true,
    }),
  );
}