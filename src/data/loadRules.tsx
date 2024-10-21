const rules = [
    {
        id: '1',
        name: 'Rule Folder 1',
        children: [
            {
                id: '1.1',
                name: 'Rule 1.1',
                children: [],
            },
            {
                id: '1.2',
                name: 'Rule 1.2',
                children: [],
            },
        ],
    },
    {
        id: '2',
        name: 'Rule 2',
        children: [
            {
                id: '2.1',
                name: 'Rule 2.1',
                children: [],
            },
            {
                id: '2.2',
                name: 'Rule 2.2',
                children: [],
            },
        ],
    }
];

export async function getRules() {
    return rules;
}

export async function getRule(ruleId: string) {
    return rules.find(rule => rule.id === ruleId);
}

export default {
    getRules,
};