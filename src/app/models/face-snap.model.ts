export class FaceSnap {
  constructor(
    public id: number,
    public title: string,
    public descritpion: string,
    public creatingDate: Date,
    public imageUrl: string,
    public snaps: number,
    public location?: string
  ) {}
}
