export type ItemType = 'agent' | 'flow' | 'mcp' | 'skill';
export type Visibility = 'Private' | 'Group-scoped' | 'Org-wide' | 'Public';
export type Persona = 'User' | 'Engineer' | 'Maintainer';
export type Scope = 'Explore' | 'Group' | 'Project';

export interface CatalogItem {
  id: string;
  name: string;
  type: ItemType;
  description: string;
  author: string;
  visibility: Visibility;
  namespaces: number;
  stars: number;
  success_rate: number | null;
  tags: string[];
  is_foundational: boolean;
  forked_from: string | null;
  updated_at: string;
  created_at: string;
}

export interface UserSettings {
  id: string;
  user_id: string | null;
  enabled_items: string[];
  current_scope: Scope;
  current_persona: Persona;
  updated_at: string;
}

export const COLORS = {
  n0: '#fff',
  n10: '#fafafa',
  n50: '#f0f0f0',
  n100: '#dbdbdb',
  n200: '#c4c4c4',
  n300: '#999',
  n400: '#868686',
  n500: '#666',
  n600: '#525252',
  n700: '#404040',
  n800: '#303030',
  n900: '#1f1f1f',
  n950: '#18171d',
  p50: '#f4f0ff',
  p100: '#e1d8f9',
  p200: '#c3b8e3',
  p700: '#453894',
  p800: '#2f2a6b',
  b50: '#e9f3fc',
  b100: '#cbe2f9',
  b200: '#9dc7f1',
  b500: '#1f75cb',
  b600: '#1068bf',
  g50: '#ecf4ee',
  g100: '#c3dcbb',
  g400: '#2da160',
  g500: '#108548',
  g600: '#217645',
  o50: '#fdf1dd',
  o100: '#f5d9a8',
  o400: '#c17d10',
  o500: '#ab6100',
  r50: '#fcf1ef',
  r500: '#dd2b0e',
  purple500: '#6943d0',
  purple600: '#5943b6',
};

export const FONT_FAMILY =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Noto Sans",Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
