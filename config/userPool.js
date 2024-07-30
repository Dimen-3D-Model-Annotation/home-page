import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "eu-north-1_SpR4YBeRs",
  ClientId : "58u36hlk1u9dhog764m9daofnl",
}

export default new CognitoUserPool(poolData);


