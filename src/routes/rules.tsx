import { useLoaderData } from "react-router-dom";
import { getRule } from "../data/loadRules";

export async function loader({ params }: { params: { ruleId: string } }) {
    const rule = await getRule(params.ruleId);
    return { rule };
}

export default function Rule() {
    const { rule } = useLoaderData();
}