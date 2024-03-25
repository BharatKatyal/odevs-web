export interface GroupsYaml {
    group: Group[];
}

export interface Group {
    name: string;
    description?: string;
    meetup_url?: string;
}
