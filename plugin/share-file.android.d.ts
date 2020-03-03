export declare class ShareFile {
    open(args: any): Promise<unknown>;
    fileExtension(filename: any): any;
    fileName(filename: any): any;
    _getUriForPath(path: any, fileName: any, ctx: any): any;
    _getUriForAbsolutePath(path: any): any;
    _getUriForAssetPath(path: any, fileName: any, ctx: any): any;
    _getUriForBase64Content(path: any, fileName: any, ctx: any): any;
    _writeBytesToFile(ctx: any, fileName: any, contents: any): string;
    _cleanAttachmentFolder(): void;
    toStringArray(arg: any): any;
}
