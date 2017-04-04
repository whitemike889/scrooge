/**
 * Generated by Scrooge
 *   version: 4.13.0-SNAPSHOT
 *   rev: 952e3625feae4a1a9eeaf4a75d413531b1770809
 *   built at: 20170404-132101
 */


import thrift from 'thrift'
import {Thrift, Protocol, Int64} from 'thrift'

import {TalonResponse} from './TalonResponse'

export interface ITalonResponseExceptionArgs {
    response: TalonResponse
    message: string
}

export class TalonResponseException {
    public response: TalonResponse
    public message: string
    // If possible, populate this with .populate method instead so that
    // we can ensure the struct is constructed correctly
constructor(args?: ITalonResponseExceptionArgs) {
        if (args) {
            if (args.response != null) {
                this.response = args.response
            }
            if (args.message != null) {
                this.message = args.message
            }
        }
    }
    populate(args: ITalonResponseExceptionArgs) {
            if (args.response != null) {
                this.response = args.response
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field response is unset!')
            }
            if (args.message != null) {
                this.message = args.message
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!')
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
                    this.response = (() => {
                        const struct = new TalonResponse()
                        struct.read(input)
                        return struct
                    })()
                    break
                case 2:
                    this.message = input.readString()
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
        output.writeStructBegin("TalonResponseException")
        if (this.response != null) {
            if (this.response !== null) {
                const response_item = this.response
                output.writeFieldBegin("response", Thrift.Type.STRUCT, 1)
                response_item.write(output)
                output.writeFieldEnd()
            }
        }
        if (this.message != null) {
            if (this.message !== null) {
                const message_item = this.message
                output.writeFieldBegin("message", Thrift.Type.STRING, 2)
                output.writeString(message_item)
                output.writeFieldEnd()
            }
        }
        output.writeFieldStop()
        output.writeStructEnd()
        return
    }
}