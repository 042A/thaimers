export class Todo {
  id: number;
  title = '';
  color = '';
  timestamp = '';
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
