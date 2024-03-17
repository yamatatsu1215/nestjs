import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
export declare class BookmarkController {
    private bookmarkService;
    constructor(bookmarkService: BookmarkService);
    getBookmarks(userId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        link: string;
        userId: number;
    }[]>;
    createBookmarks(userId: number, dto: CreateBookmarkDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        link: string;
        userId: number;
    }>;
    getBookmarkById(userId: number, bookmarkId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        link: string;
        userId: number;
    }[]>;
    editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        link: string;
        userId: number;
    }>;
    deleteBookmarkById(userId: number, bookmarkId: number): Promise<void>;
}
