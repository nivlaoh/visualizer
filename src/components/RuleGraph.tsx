import Tree from "react-d3-tree";
import { RuleDef } from "../data/loadRules";

const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};

export default function RuleGraph(rule: RuleDef) {
    return (
        <div className="rule-graph-wrapper">
            <Tree data={orgChart} />
        </div>
    );
}