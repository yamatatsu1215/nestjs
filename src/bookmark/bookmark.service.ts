import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  //全てのブックマーク取得
  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  //一つのブックマークを取得
  getBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {
    return this.prisma.bookmark.findMany({
      where: {
        id: bookmarkId,
        userId,
      },
    });
  }

  //ブックマーク作成
  async createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {
    const bookmark =
      await this.prisma.bookmark.create({
        data: {
          userId,
          ...dto,
        },
      });

    return bookmark;
  }

  //ブックマーク編集
  async editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark =
      await this.prisma.bookmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });
    //ブックマークがない。又はuserIdが一致しない
    if (!bookmark || bookmark.userId !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  //ブックマーク削除
  async deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {
    const bookmark =
      await this.prisma.bookmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });
    //ブックマークがない。又はuserIdが一致しない
    if (!bookmark || bookmark.userId !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
