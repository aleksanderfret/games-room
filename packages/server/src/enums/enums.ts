import registerEnumTypes from 'utils/registerEnumTypes';

export enum AccountStatus {
  Active = 'active',
  Deleted = 'deleted',
  Invited = 'invited',
  Registered = 'registered',
}

export enum Icon {
  BreadIcon = 'BreadIcon',
  FoodIcon = 'FoodIcon',
  HomeIcon = 'HomeIcon',
  MeatIcon = 'MeatIcon',
  ToolIcon = 'ToolIcon',
  ToyIcon = 'ToyIcon',
  WorkIcon = 'WorkIcon',
}

export enum Crud {
  Delete = 'delete',
  Get = 'get',
  Patch = 'patch',
  Post = 'post',
}

export enum Priority {
  High = 'High',
  Low = 'low',
  Normal = 'Normal',
  Urgent = 'Urgent',
}

export enum Status {
  Active = 'active',
  Archived = 'archived',
  Deleted = 'deleted',
}

export enum Type {
  Basic = 'Basic',
  Complex = 'Complex',
}

registerEnumTypes([[Icon, 'Icon']]);
