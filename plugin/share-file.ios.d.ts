import { ShareOptions } from "nativescript-akylas-share-file";
export declare class ShareFile {
    myId: number;
    private resolve;
    open(args: ShareOptions): Promise<unknown>;
    dismissed(): void;
    private getCurrentAppPath;
}
