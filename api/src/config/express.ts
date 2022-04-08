import express from 'express';


export class Init {
  private static instance: express.Application;

  private constructor () {}

  public static initialize (): express.Application {
    if (!Init.instance) {
      Init.instance = express()
    }
    return Init.instance
  }
}