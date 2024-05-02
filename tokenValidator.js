import * as https from "https";

class TwilioJsonWebTokenValidator {
  #HOSTNAME = "iam.twilio.com";
  #PORT = 443;
  #METHOD = "POST";
  isTokenValid = false;
  constructor(token, accountSid, authToken, dev) {
    this.token = token;
    this.accountSid = accountSid;
    this.authToken = authToken;
    this.authorization = Buffer.from(`${this.accountSid}:${this.authToken}`);
    this.dev = dev;
  }

  _buildURL() {
    return {
      hostname: this.#HOSTNAME,
      port: this.#PORT,
      path: `/v1/Accounts/${this.accountSid}/Tokens/validate`,
      method: this.#METHOD,
      headers: {
        Authorization: `Basic ${this.authorization.toString("base64")}`,
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Content-Length": this.token.length,
      },
    };
  }

  validateToken() {
    if (this.dev) {
      this.isTokenValid = true;
      return this.isTokenValid;
    }
    const url = this._buildURL();
    const req = https.request(url, (resp) => {
      let data = "";
      resp.setEncoding("utf8");
      resp.on("data", (d) => (data += d));
      resp.on("end", () => {
        try {
          const result = JSON.parse(data);
          if (result.valid) {
            this.isTokenValid = result;
          } else {
            this.isTokenValid = false;
          }
        } catch (err) {
          throw new Error(err.message);
        }
      });
    });
    req.on("error", (err) => new Error(err.message));
    req.write(this.token);
    req.end();

    return this.isTokenValid;
  }

  get isTokenValid() {
    return this.isTokenValid;
  }
}

const twilioValidator = new TwilioJsonWebTokenValidator(
  "TOKEN123",
  "ACXXX",
  "AUTHXXX",
  true,
).validateToken();

console.log({ twilioValidator });
