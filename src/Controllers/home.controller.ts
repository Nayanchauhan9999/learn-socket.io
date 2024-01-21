import { Request, Response } from "express";

export const homeController = (req: Request, res: Response) => {
  res.json({
    url: req.hostname,
    port: req.ips
  });
};
