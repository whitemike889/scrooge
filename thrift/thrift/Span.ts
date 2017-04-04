/**
 * Generated by Scrooge
 *   version: 4.13.0-SNAPSHOT
 *   rev: 952e3625feae4a1a9eeaf4a75d413531b1770809
 *   built at: 20170404-132117
 */
/**
 * A trace is a series of spans (often RPC calls) which form a latency tree.
 *
 * The root span is where trace_id = id and parent_id = Nil. The root span is
 * usually the longest interval in the trace, starting with a SERVER_RECV
 * annotation and ending with a SERVER_SEND.
 */


import thrift from 'thrift'
import {Thrift, Protocol, Int64} from 'thrift'

import {Annotation} from './Annotation'
import {BinaryAnnotation} from './BinaryAnnotation'

export interface ISpanArgs {
    traceId: Int64
    name: string
    id: Int64
    parentId?: Int64
    annotations: Array<Annotation>
    binaryAnnotations: Array<BinaryAnnotation>
    debug: boolean
}

export class Span {
    public traceId: Int64
    public name: string
    public id: Int64
    public parentId: Int64
    public annotations: Array<Annotation>
    public binaryAnnotations: Array<BinaryAnnotation>
    public debug: boolean
    // If possible, populate this with .populate method instead so that
    // we can ensure the struct is constructed correctly
constructor(args?: ISpanArgs) {
        if (args) {
            if (args.traceId != null) {
                this.traceId = args.traceId
            }
            if (args.name != null) {
                this.name = args.name
            }
            if (args.id != null) {
                this.id = args.id
            }
            if (args.parentId != null) {
                this.parentId = args.parentId
            }
            if (args.annotations != null) {
                this.annotations = args.annotations
            }
            if (args.binaryAnnotations != null) {
                this.binaryAnnotations = args.binaryAnnotations
            }
            if (args.debug != null) {
                this.debug = args.debug
            }
        }
    }
    populate(args: ISpanArgs) {
            if (args.traceId != null) {
                this.traceId = args.traceId
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field traceId is unset!')
            }
            if (args.name != null) {
                this.name = args.name
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field name is unset!')
            }
            if (args.id != null) {
                this.id = args.id
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!')
            }
            if (args.parentId != null) {
                this.parentId = args.parentId
            }
            if (args.annotations != null) {
                this.annotations = args.annotations
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field annotations is unset!')
            }
            if (args.binaryAnnotations != null) {
                this.binaryAnnotations = args.binaryAnnotations
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field binaryAnnotations is unset!')
            }
            if (args.debug != null) {
                this.debug = args.debug
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field debug is unset!')
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
                    this.traceId = input.readI64()
                    break
                case 3:
                    this.name = input.readString()
                    break
                case 4:
                    this.id = input.readI64()
                    break
                case 5:
                    this.parentId = input.readI64()
                    break
                case 6:
                    this.annotations = (() => {
                        const meta = input.readListBegin()
                        const elems = new Array<Annotation>()
                        for (let i = 0; i < meta.size; i++) {
                            const elem = (() => {
                        const struct = new Annotation()
                        struct.read(input)
                        return struct
                    })()
                    
                            elems.push(elem)
                        }
                        input.readListEnd()
                        return elems
                    })()
                    break
                case 8:
                    this.binaryAnnotations = (() => {
                        const meta = input.readListBegin()
                        const elems = new Array<BinaryAnnotation>()
                        for (let i = 0; i < meta.size; i++) {
                            const elem = (() => {
                        const struct = new BinaryAnnotation()
                        struct.read(input)
                        return struct
                    })()
                    
                            elems.push(elem)
                        }
                        input.readListEnd()
                        return elems
                    })()
                    break
                case 9:
                    this.debug = input.readBool()
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
        output.writeStructBegin("Span")
        if (this.traceId != null) {
            if (true) {
                const traceId_item = this.traceId
                output.writeFieldBegin("traceId", Thrift.Type.I64, 1)
                output.writeI64(traceId_item)
                output.writeFieldEnd()
            }
        }
        if (this.name != null) {
            if (this.name !== null) {
                const name_item = this.name
                output.writeFieldBegin("name", Thrift.Type.STRING, 3)
                output.writeString(name_item)
                output.writeFieldEnd()
            }
        }
        if (this.id != null) {
            if (true) {
                const id_item = this.id
                output.writeFieldBegin("id", Thrift.Type.I64, 4)
                output.writeI64(id_item)
                output.writeFieldEnd()
            }
        }
        if (this.parentId != null) {
            if (this.parentId !== undefined) {
                const parentId_item = this.parentId
                output.writeFieldBegin("parentId", Thrift.Type.I64, 5)
                output.writeI64(parentId_item)
                output.writeFieldEnd()
            }
        }
        if (this.annotations != null) {
            if (this.annotations !== null) {
                const annotations_item = this.annotations
                output.writeFieldBegin("annotations", Thrift.Type.LIST, 6)
                output.writeListBegin(Thrift.Type.STRUCT, annotations_item.length)
                for (let i = 0; i < annotations_item.length; i++) {
                    const annotations_item_element = annotations_item[i]
                    annotations_item_element.write(output)
                }
                output.writeListEnd()
                output.writeFieldEnd()
            }
        }
        if (this.binaryAnnotations != null) {
            if (this.binaryAnnotations !== null) {
                const binaryAnnotations_item = this.binaryAnnotations
                output.writeFieldBegin("binaryAnnotations", Thrift.Type.LIST, 8)
                output.writeListBegin(Thrift.Type.STRUCT, binaryAnnotations_item.length)
                for (let i = 0; i < binaryAnnotations_item.length; i++) {
                    const binaryAnnotations_item_element = binaryAnnotations_item[i]
                    binaryAnnotations_item_element.write(output)
                }
                output.writeListEnd()
                output.writeFieldEnd()
            }
        }
        if (this.debug != null) {
            if (true) {
                const debug_item = this.debug
                output.writeFieldBegin("debug", Thrift.Type.BOOL, 9)
                output.writeBool(debug_item)
                output.writeFieldEnd()
            }
        }
        output.writeFieldStop()
        output.writeStructEnd()
        return
    }
}