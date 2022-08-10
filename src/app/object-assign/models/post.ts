export class Post {
  public userId!: number;
  public id!: number;
  public title!: string;
  public body!: string;

  public constructor(post: Partial<Post> & Pick<Post, 'id'>) {
    Object.assign(this, post);
  }
}
