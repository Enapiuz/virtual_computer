import ForceGraph from "force-graph";
import {Adder16} from "./circuit/blocks/adder16";
import {IOPort} from "./circuit/element";
import * as d3 from "d3"

console.log("Hello debugger!");

const elem = new Adder16();
console.log(elem);

// elements
// @ts-ignore
let nodes: any[] = [...elem.elements.keys()].map((e) => ({
    id: e,
    label: e,
    level: 2,
    val: 2,
    color: 'red'
}));

// inputs
nodes = [
    ...nodes,
    //@ts-ignore
    ...[...elem.inputs.keys()].map((c) => {
        //@ts-ignore
        const ioport = elem.inputs.get(c) as IOPort
        return {
            id: `inp_${ioport.elementName}${ioport.elementPort}`,
            level: 1,
            color: 'green'
        }
    })
]

// outputs
nodes = [
    ...nodes,
    //@ts-ignore
    ...[...elem.outputs.keys()].map((c) => {
        //@ts-ignore
        const ioport = elem.outputs.get(c) as IOPort
        return {
            id: `outp_${ioport.elementName}${ioport.elementPort}`,
            level: 3,
            color: 'violet'
        }
    })
]

// elements
// @ts-ignore
let links: any[] = [...elem.connections.values()]
    .map(e => ({
        source: e.srcName,
        target: e.dstName
    }));

// inputs
links = [
    ...links,
    //@ts-ignore
    ...[...elem.inputs.keys()].map((c) => {
        //@ts-ignore
        const ioport = elem.inputs.get(c) as IOPort
        return {
            source: `inp_${ioport.elementName}${ioport.elementPort}`,
            target: ioport.elementName
        }
    })
]

// outputs
links = [
    ...links,
    //@ts-ignore
    ...[...elem.outputs.keys()].map((c) => {
        //@ts-ignore
        const ioport = elem.outputs.get(c) as IOPort
        return {
            source: ioport.elementName,
            target: `outp_${ioport.elementName}${ioport.elementPort}`
        }
    })
]

const gData = {
    nodes,
    links: links
};

console.log(gData);

const NODE_REL_SIZE = 1;
const Graph = ForceGraph()
(document.getElementById('body') as HTMLElement)
    .linkDirectionalParticles(2)
    .nodeCanvasObject((node, ctx, globalScale) => {
        const label = node.id;
        const fontSize = 12/globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        //@ts-ignore
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        //@ts-ignore
        ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        //@ts-ignore
        ctx.fillStyle = node.color;
        //@ts-ignore
        ctx.fillText(label, node.x, node.y);

        //@ts-ignore
        node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
      })
    //@ts-ignore
    .d3Force('collision', d3.forceCollide(node => Math.sqrt(100)))
    .d3VelocityDecay(0.1)
    .graphData(gData);
