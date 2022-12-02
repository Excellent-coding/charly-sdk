import { Client } from './client';
import {BookService, MovieService, CharacterService, QuoteService, ChapterService} from './service';
import {ClientConfig, Query} from './types';
import {Filter} from "./filter/filter";
import {PaginatedResponse} from "./types/response/paginatedResponse";
import {Book} from "./types/response/book";
import {Chapter} from "./types/response/chapter";
import {Movie} from "./types/response/movie";
import {Quote} from "./types/response/quote";
import {Character} from "./types/response/character";

export class main {
    private readonly client: Client;

    private readonly bookService: BookService;

    private readonly movieService: MovieService;

    private readonly characterService: CharacterService;

    private readonly quoteService: QuoteService;

    private readonly chapterService: ChapterService;

    constructor(apiKey?: string) {
        this.client = new Client(apiKey);
        this.bookService = new BookService(this.client);
        this.movieService = new MovieService(this.client);
        this.characterService = new CharacterService(this.client);
        this.quoteService = new QuoteService(this.client);
        this.chapterService = new ChapterService(this.client);
    }

    // Add configurable properties such as cache control and other headers 
    public config(config: ClientConfig) {
        this.client.config(config);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Book>>} books
     */
    public async books(query?: Query): Promise<PaginatedResponse<Book>> {
        return await this.bookService.getList(query);
    }

    /**
     *  @param {string} id
     *
     *  @returns {Promise<PaginatedResponse<Book>>} books
     */
     public async book(id: string): Promise<PaginatedResponse<Book>> {
        return await this.bookService.getById(id);
    }

    /**
     *  @param {string} bookId
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Chapter>>} chapters
     */
    public async bookChapters(bookId: string, query?: Query): Promise<PaginatedResponse<Chapter>> {
        return await this.bookService.getChapters(bookId, query);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Movie>>} movies
     */
    public async movies(query?: Query): Promise<PaginatedResponse<Movie>> {
        return await this.movieService.getList(query);
    }

    /**
     *  @param {string} id
     *
     *  @returns {Promise<PaginatedResponse<Movie>>} movies
     */
    public async movie(id: string): Promise<PaginatedResponse<Movie>> {
        return this.movieService.getById(id);
    }

    /**
     *  @param {string} movieId
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async movieQuotes(movieId: string, query?: Query): Promise<PaginatedResponse<Quote>> {
        return this.movieService.getQuotes(movieId, query);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Character>>} characters
     */
    public async characters(query?: Query): Promise<PaginatedResponse<Character>> {
        return await this.characterService.getList(query);
    }

    /**
     *  @param {string} id
     *
     *  @returns {Promise<PaginatedResponse<Character>>} characters
     */
    public async character(id: string): Promise<PaginatedResponse<Character>> {
        return this.characterService.getById(id);
    }

    /**
     *  @param {string} characterId
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async characterQuotes(characterId: string, query?: Query): Promise<PaginatedResponse<Quote>> {
        return this.characterService.getCharacterQuotes(characterId, query);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async quotes(query?: Query): Promise<PaginatedResponse<Quote>> {
        return await this.quoteService.getList(query);
    }

    /**
     *  @param {string} id
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async quote(id: string): Promise<PaginatedResponse<Quote>> {
        return this.quoteService.getById(id);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Chapter>>} chapters
     */
    public async chapters(query?: Query): Promise<PaginatedResponse<Chapter>> {
        return await this.chapterService.getList(query);
    }

    /**
     *  @param {string} id
     *  @returns {Promise<PaginatedResponse<Chapter>>} chapters
     */
    public async chapter(id: string): Promise<PaginatedResponse<Chapter>> {
        return this.chapterService.getById(id);
    }

    public filter(field: string) {
        return new Filter(field);
    }
}