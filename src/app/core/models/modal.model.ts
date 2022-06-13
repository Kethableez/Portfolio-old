export interface Modal {
  type: 'success' | 'error' | 'warning' | 'info';
  header: string;
  message: string;
  buttons: string[];
}
