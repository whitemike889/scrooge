/**
 * Generated by Scrooge
 *   version: 4.13.0-SNAPSHOT
 *   rev: 952e3625feae4a1a9eeaf4a75d413531b1770809
 *   built at: 20170404-132117
 */
/**
 * An annotation is similar to a log statement. It includes a host field which
 * allows these events to be attributed properly, and also aggregatable.
 */


import thrift from 'thrift'
import {Thrift, Protocol, Int64} from 'thrift'

import {Endpoint} from './Endpoint'

export interface IAnnotationArgs {
    timestamp: Int64
    value: string
    host?: Endpoint
}

export class Annotation {
    public timestamp: Int64
    public value: string
    public host: Endpoint
    // If possible, populate this with .populate method instead so that
    // we can ensure the struct is constructed correctly
constructor(args?: IAnnotationArgs) {
        if (args) {
            if (args.timestamp != null) {
                this.timestamp = args.timestamp
            }
            if (args.value != null) {
                this.value = args.value
            }
            if (args.host != null) {
                this.host = args.host
            }
        }
    }
    populate(args: IAnnotationArgs) {
            if (args.timestamp != null) {
                this.timestamp = args.timestamp
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field timestamp is unset!')
            }
            if (args.value != null) {
                this.value = args.value
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field value is unset!')
            }
            if (args.host != null) {
                this.host = args.host
            }
    }

    public read(input: Protocol): void {
        input.readStructBegin()
        while (true) {
    const {ftype, fid} = input.readFieldBegin()
            if (ftype === Thrift.Type.STOP) {
                break
            }
            switch (fid) {
                case 1:
                    this.timestamp = input.readI64()
                    break
                case 2:
                    this.value = input.readString()
                    break
                case 3:
                    this.host = (() => {
                        const struct = new Endpoint()
                        struct.read(input)
                        return struct
                    })()
                    break
                default:
                    input.skip(ftype)
            }
            input.readFieldEnd()
        }
        input.readStructEnd()
        return
    }

    public write(output: Protocol): void {
        output.writeStructBegin("Annotation")
        if (this.timestamp != null) {
            if (true) {
                const timestamp_item = this.timestamp
                output.writeFieldBegin("timestamp", Thrift.Type.I64, 1)
                output.writeI64(timestamp_item)
                output.writeFieldEnd()
            }
        }
        if (this.value != null) {
            if (this.value !== null) {
                const value_item = this.value
                output.writeFieldBegin("value", Thrift.Type.STRING, 2)
                output.writeString(value_item)
                output.writeFieldEnd()
            }
        }
        if (this.host != null) {
            if (this.host !== undefined) {
                const host_item = this.host
                output.writeFieldBegin("host", Thrift.Type.STRUCT, 3)
                host_item.write(output)
                output.writeFieldEnd()
            }
        }
        output.writeFieldStop()
        output.writeStructEnd()
        return
    }
}