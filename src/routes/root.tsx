import { getRules } from "../data/loadRules";

export async function loader() {
    const rules = await getRules();
    return { rules };
}