export interface NavigationItem {
  label: string;
  path: string;
  fragment?: string;
  visible: boolean;
  exact?: boolean;
}
