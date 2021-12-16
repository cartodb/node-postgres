/// <reference types="node" />
import { DatabaseError } from './messages';
import { serialize } from './serializer';
import { MessageCallback } from './parser';
export declare function parse(stream: NodeJS.ReadableStream, callback: MessageCallback, maxRowSize?: number): Promise<void>;
export { serialize, DatabaseError };
