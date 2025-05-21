
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_details
 * 
 */
export type user_details = $Result.DefaultSelection<Prisma.$user_detailsPayload>
/**
 * Model group_details
 * 
 */
export type group_details = $Result.DefaultSelection<Prisma.$group_detailsPayload>
/**
 * Model user_cohort_mapping
 * 
 */
export type user_cohort_mapping = $Result.DefaultSelection<Prisma.$user_cohort_mappingPayload>
/**
 * Model cohort_details
 * 
 */
export type cohort_details = $Result.DefaultSelection<Prisma.$cohort_detailsPayload>
/**
 * Model group_joining_request_details
 * 
 */
export type group_joining_request_details = $Result.DefaultSelection<Prisma.$group_joining_request_detailsPayload>
/**
 * Model notice_board_details
 * 
 */
export type notice_board_details = $Result.DefaultSelection<Prisma.$notice_board_detailsPayload>
/**
 * Model user_group_mapping
 * 
 */
export type user_group_mapping = $Result.DefaultSelection<Prisma.$user_group_mappingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ROLE: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]

}

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_details
 * const user_details = await prisma.user_details.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_details
   * const user_details = await prisma.user_details.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_details`: Exposes CRUD operations for the **user_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_details
    * const user_details = await prisma.user_details.findMany()
    * ```
    */
  get user_details(): Prisma.user_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_details`: Exposes CRUD operations for the **group_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_details
    * const group_details = await prisma.group_details.findMany()
    * ```
    */
  get group_details(): Prisma.group_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_cohort_mapping`: Exposes CRUD operations for the **user_cohort_mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_cohort_mappings
    * const user_cohort_mappings = await prisma.user_cohort_mapping.findMany()
    * ```
    */
  get user_cohort_mapping(): Prisma.user_cohort_mappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cohort_details`: Exposes CRUD operations for the **cohort_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cohort_details
    * const cohort_details = await prisma.cohort_details.findMany()
    * ```
    */
  get cohort_details(): Prisma.cohort_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_joining_request_details`: Exposes CRUD operations for the **group_joining_request_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_joining_request_details
    * const group_joining_request_details = await prisma.group_joining_request_details.findMany()
    * ```
    */
  get group_joining_request_details(): Prisma.group_joining_request_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice_board_details`: Exposes CRUD operations for the **notice_board_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notice_board_details
    * const notice_board_details = await prisma.notice_board_details.findMany()
    * ```
    */
  get notice_board_details(): Prisma.notice_board_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_group_mapping`: Exposes CRUD operations for the **user_group_mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_group_mappings
    * const user_group_mappings = await prisma.user_group_mapping.findMany()
    * ```
    */
  get user_group_mapping(): Prisma.user_group_mappingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_details: 'user_details',
    group_details: 'group_details',
    user_cohort_mapping: 'user_cohort_mapping',
    cohort_details: 'cohort_details',
    group_joining_request_details: 'group_joining_request_details',
    notice_board_details: 'notice_board_details',
    user_group_mapping: 'user_group_mapping'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_details" | "group_details" | "user_cohort_mapping" | "cohort_details" | "group_joining_request_details" | "notice_board_details" | "user_group_mapping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_details: {
        payload: Prisma.$user_detailsPayload<ExtArgs>
        fields: Prisma.user_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>
          }
          findFirst: {
            args: Prisma.user_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>
          }
          findMany: {
            args: Prisma.user_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>[]
          }
          create: {
            args: Prisma.user_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>
          }
          createMany: {
            args: Prisma.user_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>[]
          }
          delete: {
            args: Prisma.user_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>
          }
          update: {
            args: Prisma.user_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>
          }
          deleteMany: {
            args: Prisma.user_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>[]
          }
          upsert: {
            args: Prisma.user_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_detailsPayload>
          }
          aggregate: {
            args: Prisma.User_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_details>
          }
          groupBy: {
            args: Prisma.user_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<User_detailsCountAggregateOutputType> | number
          }
        }
      }
      group_details: {
        payload: Prisma.$group_detailsPayload<ExtArgs>
        fields: Prisma.group_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>
          }
          findFirst: {
            args: Prisma.group_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>
          }
          findMany: {
            args: Prisma.group_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>[]
          }
          create: {
            args: Prisma.group_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>
          }
          createMany: {
            args: Prisma.group_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.group_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>[]
          }
          delete: {
            args: Prisma.group_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>
          }
          update: {
            args: Prisma.group_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>
          }
          deleteMany: {
            args: Prisma.group_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.group_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>[]
          }
          upsert: {
            args: Prisma.group_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_detailsPayload>
          }
          aggregate: {
            args: Prisma.Group_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_details>
          }
          groupBy: {
            args: Prisma.group_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Group_detailsCountAggregateOutputType> | number
          }
        }
      }
      user_cohort_mapping: {
        payload: Prisma.$user_cohort_mappingPayload<ExtArgs>
        fields: Prisma.user_cohort_mappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_cohort_mappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_cohort_mappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>
          }
          findFirst: {
            args: Prisma.user_cohort_mappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_cohort_mappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>
          }
          findMany: {
            args: Prisma.user_cohort_mappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>[]
          }
          create: {
            args: Prisma.user_cohort_mappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>
          }
          createMany: {
            args: Prisma.user_cohort_mappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_cohort_mappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>[]
          }
          delete: {
            args: Prisma.user_cohort_mappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>
          }
          update: {
            args: Prisma.user_cohort_mappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>
          }
          deleteMany: {
            args: Prisma.user_cohort_mappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_cohort_mappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_cohort_mappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>[]
          }
          upsert: {
            args: Prisma.user_cohort_mappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cohort_mappingPayload>
          }
          aggregate: {
            args: Prisma.User_cohort_mappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_cohort_mapping>
          }
          groupBy: {
            args: Prisma.user_cohort_mappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_cohort_mappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_cohort_mappingCountArgs<ExtArgs>
            result: $Utils.Optional<User_cohort_mappingCountAggregateOutputType> | number
          }
        }
      }
      cohort_details: {
        payload: Prisma.$cohort_detailsPayload<ExtArgs>
        fields: Prisma.cohort_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cohort_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cohort_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>
          }
          findFirst: {
            args: Prisma.cohort_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cohort_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>
          }
          findMany: {
            args: Prisma.cohort_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>[]
          }
          create: {
            args: Prisma.cohort_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>
          }
          createMany: {
            args: Prisma.cohort_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cohort_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>[]
          }
          delete: {
            args: Prisma.cohort_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>
          }
          update: {
            args: Prisma.cohort_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>
          }
          deleteMany: {
            args: Prisma.cohort_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cohort_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cohort_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>[]
          }
          upsert: {
            args: Prisma.cohort_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cohort_detailsPayload>
          }
          aggregate: {
            args: Prisma.Cohort_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCohort_details>
          }
          groupBy: {
            args: Prisma.cohort_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cohort_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cohort_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Cohort_detailsCountAggregateOutputType> | number
          }
        }
      }
      group_joining_request_details: {
        payload: Prisma.$group_joining_request_detailsPayload<ExtArgs>
        fields: Prisma.group_joining_request_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_joining_request_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_joining_request_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>
          }
          findFirst: {
            args: Prisma.group_joining_request_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_joining_request_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>
          }
          findMany: {
            args: Prisma.group_joining_request_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>[]
          }
          create: {
            args: Prisma.group_joining_request_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>
          }
          createMany: {
            args: Prisma.group_joining_request_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.group_joining_request_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>[]
          }
          delete: {
            args: Prisma.group_joining_request_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>
          }
          update: {
            args: Prisma.group_joining_request_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>
          }
          deleteMany: {
            args: Prisma.group_joining_request_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_joining_request_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.group_joining_request_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>[]
          }
          upsert: {
            args: Prisma.group_joining_request_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_joining_request_detailsPayload>
          }
          aggregate: {
            args: Prisma.Group_joining_request_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_joining_request_details>
          }
          groupBy: {
            args: Prisma.group_joining_request_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_joining_request_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_joining_request_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Group_joining_request_detailsCountAggregateOutputType> | number
          }
        }
      }
      notice_board_details: {
        payload: Prisma.$notice_board_detailsPayload<ExtArgs>
        fields: Prisma.notice_board_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notice_board_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notice_board_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>
          }
          findFirst: {
            args: Prisma.notice_board_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notice_board_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>
          }
          findMany: {
            args: Prisma.notice_board_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>[]
          }
          create: {
            args: Prisma.notice_board_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>
          }
          createMany: {
            args: Prisma.notice_board_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notice_board_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>[]
          }
          delete: {
            args: Prisma.notice_board_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>
          }
          update: {
            args: Prisma.notice_board_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>
          }
          deleteMany: {
            args: Prisma.notice_board_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notice_board_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notice_board_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>[]
          }
          upsert: {
            args: Prisma.notice_board_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notice_board_detailsPayload>
          }
          aggregate: {
            args: Prisma.Notice_board_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice_board_details>
          }
          groupBy: {
            args: Prisma.notice_board_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Notice_board_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notice_board_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Notice_board_detailsCountAggregateOutputType> | number
          }
        }
      }
      user_group_mapping: {
        payload: Prisma.$user_group_mappingPayload<ExtArgs>
        fields: Prisma.user_group_mappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_group_mappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_group_mappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>
          }
          findFirst: {
            args: Prisma.user_group_mappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_group_mappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>
          }
          findMany: {
            args: Prisma.user_group_mappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>[]
          }
          create: {
            args: Prisma.user_group_mappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>
          }
          createMany: {
            args: Prisma.user_group_mappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_group_mappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>[]
          }
          delete: {
            args: Prisma.user_group_mappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>
          }
          update: {
            args: Prisma.user_group_mappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>
          }
          deleteMany: {
            args: Prisma.user_group_mappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_group_mappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_group_mappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>[]
          }
          upsert: {
            args: Prisma.user_group_mappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_group_mappingPayload>
          }
          aggregate: {
            args: Prisma.User_group_mappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_group_mapping>
          }
          groupBy: {
            args: Prisma.user_group_mappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_group_mappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_group_mappingCountArgs<ExtArgs>
            result: $Utils.Optional<User_group_mappingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_details?: user_detailsOmit
    group_details?: group_detailsOmit
    user_cohort_mapping?: user_cohort_mappingOmit
    cohort_details?: cohort_detailsOmit
    group_joining_request_details?: group_joining_request_detailsOmit
    notice_board_details?: notice_board_detailsOmit
    user_group_mapping?: user_group_mappingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_detailsCountOutputType
   */

  export type User_detailsCountOutputType = {
    group_details: number
    group_joining_request_details: number
    notice_board_details: number
    user_cohort_mapping: number
    user_group_mapping: number
  }

  export type User_detailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_details?: boolean | User_detailsCountOutputTypeCountGroup_detailsArgs
    group_joining_request_details?: boolean | User_detailsCountOutputTypeCountGroup_joining_request_detailsArgs
    notice_board_details?: boolean | User_detailsCountOutputTypeCountNotice_board_detailsArgs
    user_cohort_mapping?: boolean | User_detailsCountOutputTypeCountUser_cohort_mappingArgs
    user_group_mapping?: boolean | User_detailsCountOutputTypeCountUser_group_mappingArgs
  }

  // Custom InputTypes
  /**
   * User_detailsCountOutputType without action
   */
  export type User_detailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_detailsCountOutputType
     */
    select?: User_detailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_detailsCountOutputType without action
   */
  export type User_detailsCountOutputTypeCountGroup_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_detailsWhereInput
  }

  /**
   * User_detailsCountOutputType without action
   */
  export type User_detailsCountOutputTypeCountGroup_joining_request_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_joining_request_detailsWhereInput
  }

  /**
   * User_detailsCountOutputType without action
   */
  export type User_detailsCountOutputTypeCountNotice_board_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notice_board_detailsWhereInput
  }

  /**
   * User_detailsCountOutputType without action
   */
  export type User_detailsCountOutputTypeCountUser_cohort_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_cohort_mappingWhereInput
  }

  /**
   * User_detailsCountOutputType without action
   */
  export type User_detailsCountOutputTypeCountUser_group_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_group_mappingWhereInput
  }


  /**
   * Count Type Group_detailsCountOutputType
   */

  export type Group_detailsCountOutputType = {
    group_joining_request_details: number
    user_group_mapping: number
  }

  export type Group_detailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_joining_request_details?: boolean | Group_detailsCountOutputTypeCountGroup_joining_request_detailsArgs
    user_group_mapping?: boolean | Group_detailsCountOutputTypeCountUser_group_mappingArgs
  }

  // Custom InputTypes
  /**
   * Group_detailsCountOutputType without action
   */
  export type Group_detailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group_detailsCountOutputType
     */
    select?: Group_detailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Group_detailsCountOutputType without action
   */
  export type Group_detailsCountOutputTypeCountGroup_joining_request_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_joining_request_detailsWhereInput
  }

  /**
   * Group_detailsCountOutputType without action
   */
  export type Group_detailsCountOutputTypeCountUser_group_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_group_mappingWhereInput
  }


  /**
   * Count Type Cohort_detailsCountOutputType
   */

  export type Cohort_detailsCountOutputType = {
    userCohorts: number
  }

  export type Cohort_detailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCohorts?: boolean | Cohort_detailsCountOutputTypeCountUserCohortsArgs
  }

  // Custom InputTypes
  /**
   * Cohort_detailsCountOutputType without action
   */
  export type Cohort_detailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort_detailsCountOutputType
     */
    select?: Cohort_detailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cohort_detailsCountOutputType without action
   */
  export type Cohort_detailsCountOutputTypeCountUserCohortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_cohort_mappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_details
   */

  export type AggregateUser_details = {
    _count: User_detailsCountAggregateOutputType | null
    _min: User_detailsMinAggregateOutputType | null
    _max: User_detailsMaxAggregateOutputType | null
  }

  export type User_detailsMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    frist_name: string | null
    last_name: string | null
    refreshToken: string | null
    role: $Enums.ROLE | null
    github_link: string | null
    hashnode_link: string | null
    peerlist_link: string | null
    tweeter_link: string | null
  }

  export type User_detailsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    frist_name: string | null
    last_name: string | null
    refreshToken: string | null
    role: $Enums.ROLE | null
    github_link: string | null
    hashnode_link: string | null
    peerlist_link: string | null
    tweeter_link: string | null
  }

  export type User_detailsCountAggregateOutputType = {
    id: number
    email: number
    password: number
    frist_name: number
    last_name: number
    refreshToken: number
    role: number
    github_link: number
    hashnode_link: number
    peerlist_link: number
    tweeter_link: number
    _all: number
  }


  export type User_detailsMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    frist_name?: true
    last_name?: true
    refreshToken?: true
    role?: true
    github_link?: true
    hashnode_link?: true
    peerlist_link?: true
    tweeter_link?: true
  }

  export type User_detailsMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    frist_name?: true
    last_name?: true
    refreshToken?: true
    role?: true
    github_link?: true
    hashnode_link?: true
    peerlist_link?: true
    tweeter_link?: true
  }

  export type User_detailsCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    frist_name?: true
    last_name?: true
    refreshToken?: true
    role?: true
    github_link?: true
    hashnode_link?: true
    peerlist_link?: true
    tweeter_link?: true
    _all?: true
  }

  export type User_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_details to aggregate.
     */
    where?: user_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: user_detailsOrderByWithRelationInput | user_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_details
    **/
    _count?: true | User_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_detailsMaxAggregateInputType
  }

  export type GetUser_detailsAggregateType<T extends User_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_details[P]>
      : GetScalarType<T[P], AggregateUser_details[P]>
  }




  export type user_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_detailsWhereInput
    orderBy?: user_detailsOrderByWithAggregationInput | user_detailsOrderByWithAggregationInput[]
    by: User_detailsScalarFieldEnum[] | User_detailsScalarFieldEnum
    having?: user_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_detailsCountAggregateInputType | true
    _min?: User_detailsMinAggregateInputType
    _max?: User_detailsMaxAggregateInputType
  }

  export type User_detailsGroupByOutputType = {
    id: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    _count: User_detailsCountAggregateOutputType | null
    _min: User_detailsMinAggregateOutputType | null
    _max: User_detailsMaxAggregateOutputType | null
  }

  type GetUser_detailsGroupByPayload<T extends user_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], User_detailsGroupByOutputType[P]>
        }
      >
    >


  export type user_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    frist_name?: boolean
    last_name?: boolean
    refreshToken?: boolean
    role?: boolean
    github_link?: boolean
    hashnode_link?: boolean
    peerlist_link?: boolean
    tweeter_link?: boolean
    group_details?: boolean | user_details$group_detailsArgs<ExtArgs>
    group_joining_request_details?: boolean | user_details$group_joining_request_detailsArgs<ExtArgs>
    notice_board_details?: boolean | user_details$notice_board_detailsArgs<ExtArgs>
    user_cohort_mapping?: boolean | user_details$user_cohort_mappingArgs<ExtArgs>
    user_group_mapping?: boolean | user_details$user_group_mappingArgs<ExtArgs>
    _count?: boolean | User_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_details"]>

  export type user_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    frist_name?: boolean
    last_name?: boolean
    refreshToken?: boolean
    role?: boolean
    github_link?: boolean
    hashnode_link?: boolean
    peerlist_link?: boolean
    tweeter_link?: boolean
  }, ExtArgs["result"]["user_details"]>

  export type user_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    frist_name?: boolean
    last_name?: boolean
    refreshToken?: boolean
    role?: boolean
    github_link?: boolean
    hashnode_link?: boolean
    peerlist_link?: boolean
    tweeter_link?: boolean
  }, ExtArgs["result"]["user_details"]>

  export type user_detailsSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    frist_name?: boolean
    last_name?: boolean
    refreshToken?: boolean
    role?: boolean
    github_link?: boolean
    hashnode_link?: boolean
    peerlist_link?: boolean
    tweeter_link?: boolean
  }

  export type user_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "frist_name" | "last_name" | "refreshToken" | "role" | "github_link" | "hashnode_link" | "peerlist_link" | "tweeter_link", ExtArgs["result"]["user_details"]>
  export type user_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_details?: boolean | user_details$group_detailsArgs<ExtArgs>
    group_joining_request_details?: boolean | user_details$group_joining_request_detailsArgs<ExtArgs>
    notice_board_details?: boolean | user_details$notice_board_detailsArgs<ExtArgs>
    user_cohort_mapping?: boolean | user_details$user_cohort_mappingArgs<ExtArgs>
    user_group_mapping?: boolean | user_details$user_group_mappingArgs<ExtArgs>
    _count?: boolean | User_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_details"
    objects: {
      group_details: Prisma.$group_detailsPayload<ExtArgs>[]
      group_joining_request_details: Prisma.$group_joining_request_detailsPayload<ExtArgs>[]
      notice_board_details: Prisma.$notice_board_detailsPayload<ExtArgs>[]
      user_cohort_mapping: Prisma.$user_cohort_mappingPayload<ExtArgs>[]
      user_group_mapping: Prisma.$user_group_mappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      frist_name: string
      last_name: string
      refreshToken: string | null
      role: $Enums.ROLE
      github_link: string
      hashnode_link: string
      peerlist_link: string
      tweeter_link: string
    }, ExtArgs["result"]["user_details"]>
    composites: {}
  }

  type user_detailsGetPayload<S extends boolean | null | undefined | user_detailsDefaultArgs> = $Result.GetResult<Prisma.$user_detailsPayload, S>

  type user_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_detailsCountAggregateInputType | true
    }

  export interface user_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_details'], meta: { name: 'user_details' } }
    /**
     * Find zero or one User_details that matches the filter.
     * @param {user_detailsFindUniqueArgs} args - Arguments to find a User_details
     * @example
     * // Get one User_details
     * const user_details = await prisma.user_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_detailsFindUniqueArgs>(args: SelectSubset<T, user_detailsFindUniqueArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_detailsFindUniqueOrThrowArgs} args - Arguments to find a User_details
     * @example
     * // Get one User_details
     * const user_details = await prisma.user_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailsFindFirstArgs} args - Arguments to find a User_details
     * @example
     * // Get one User_details
     * const user_details = await prisma.user_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_detailsFindFirstArgs>(args?: SelectSubset<T, user_detailsFindFirstArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailsFindFirstOrThrowArgs} args - Arguments to find a User_details
     * @example
     * // Get one User_details
     * const user_details = await prisma.user_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_details
     * const user_details = await prisma.user_details.findMany()
     * 
     * // Get first 10 User_details
     * const user_details = await prisma.user_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_detailsWithIdOnly = await prisma.user_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_detailsFindManyArgs>(args?: SelectSubset<T, user_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_details.
     * @param {user_detailsCreateArgs} args - Arguments to create a User_details.
     * @example
     * // Create one User_details
     * const User_details = await prisma.user_details.create({
     *   data: {
     *     // ... data to create a User_details
     *   }
     * })
     * 
     */
    create<T extends user_detailsCreateArgs>(args: SelectSubset<T, user_detailsCreateArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_details.
     * @param {user_detailsCreateManyArgs} args - Arguments to create many User_details.
     * @example
     * // Create many User_details
     * const user_details = await prisma.user_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_detailsCreateManyArgs>(args?: SelectSubset<T, user_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_details and returns the data saved in the database.
     * @param {user_detailsCreateManyAndReturnArgs} args - Arguments to create many User_details.
     * @example
     * // Create many User_details
     * const user_details = await prisma.user_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_details and only return the `id`
     * const user_detailsWithIdOnly = await prisma.user_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_details.
     * @param {user_detailsDeleteArgs} args - Arguments to delete one User_details.
     * @example
     * // Delete one User_details
     * const User_details = await prisma.user_details.delete({
     *   where: {
     *     // ... filter to delete one User_details
     *   }
     * })
     * 
     */
    delete<T extends user_detailsDeleteArgs>(args: SelectSubset<T, user_detailsDeleteArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_details.
     * @param {user_detailsUpdateArgs} args - Arguments to update one User_details.
     * @example
     * // Update one User_details
     * const user_details = await prisma.user_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_detailsUpdateArgs>(args: SelectSubset<T, user_detailsUpdateArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_details.
     * @param {user_detailsDeleteManyArgs} args - Arguments to filter User_details to delete.
     * @example
     * // Delete a few User_details
     * const { count } = await prisma.user_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_detailsDeleteManyArgs>(args?: SelectSubset<T, user_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_details
     * const user_details = await prisma.user_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_detailsUpdateManyArgs>(args: SelectSubset<T, user_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_details and returns the data updated in the database.
     * @param {user_detailsUpdateManyAndReturnArgs} args - Arguments to update many User_details.
     * @example
     * // Update many User_details
     * const user_details = await prisma.user_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_details and only return the `id`
     * const user_detailsWithIdOnly = await prisma.user_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_details.
     * @param {user_detailsUpsertArgs} args - Arguments to update or create a User_details.
     * @example
     * // Update or create a User_details
     * const user_details = await prisma.user_details.upsert({
     *   create: {
     *     // ... data to create a User_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_details we want to update
     *   }
     * })
     */
    upsert<T extends user_detailsUpsertArgs>(args: SelectSubset<T, user_detailsUpsertArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailsCountArgs} args - Arguments to filter User_details to count.
     * @example
     * // Count the number of User_details
     * const count = await prisma.user_details.count({
     *   where: {
     *     // ... the filter for the User_details we want to count
     *   }
     * })
    **/
    count<T extends user_detailsCountArgs>(
      args?: Subset<T, user_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_detailsAggregateArgs>(args: Subset<T, User_detailsAggregateArgs>): Prisma.PrismaPromise<GetUser_detailsAggregateType<T>>

    /**
     * Group by User_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_detailsGroupByArgs['orderBy'] }
        : { orderBy?: user_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_details model
   */
  readonly fields: user_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group_details<T extends user_details$group_detailsArgs<ExtArgs> = {}>(args?: Subset<T, user_details$group_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group_joining_request_details<T extends user_details$group_joining_request_detailsArgs<ExtArgs> = {}>(args?: Subset<T, user_details$group_joining_request_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notice_board_details<T extends user_details$notice_board_detailsArgs<ExtArgs> = {}>(args?: Subset<T, user_details$notice_board_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_cohort_mapping<T extends user_details$user_cohort_mappingArgs<ExtArgs> = {}>(args?: Subset<T, user_details$user_cohort_mappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_group_mapping<T extends user_details$user_group_mappingArgs<ExtArgs> = {}>(args?: Subset<T, user_details$user_group_mappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_details model
   */
  interface user_detailsFieldRefs {
    readonly id: FieldRef<"user_details", 'String'>
    readonly email: FieldRef<"user_details", 'String'>
    readonly password: FieldRef<"user_details", 'String'>
    readonly frist_name: FieldRef<"user_details", 'String'>
    readonly last_name: FieldRef<"user_details", 'String'>
    readonly refreshToken: FieldRef<"user_details", 'String'>
    readonly role: FieldRef<"user_details", 'ROLE'>
    readonly github_link: FieldRef<"user_details", 'String'>
    readonly hashnode_link: FieldRef<"user_details", 'String'>
    readonly peerlist_link: FieldRef<"user_details", 'String'>
    readonly tweeter_link: FieldRef<"user_details", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_details findUnique
   */
  export type user_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * Filter, which user_details to fetch.
     */
    where: user_detailsWhereUniqueInput
  }

  /**
   * user_details findUniqueOrThrow
   */
  export type user_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * Filter, which user_details to fetch.
     */
    where: user_detailsWhereUniqueInput
  }

  /**
   * user_details findFirst
   */
  export type user_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * Filter, which user_details to fetch.
     */
    where?: user_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: user_detailsOrderByWithRelationInput | user_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_details.
     */
    cursor?: user_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_details.
     */
    distinct?: User_detailsScalarFieldEnum | User_detailsScalarFieldEnum[]
  }

  /**
   * user_details findFirstOrThrow
   */
  export type user_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * Filter, which user_details to fetch.
     */
    where?: user_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: user_detailsOrderByWithRelationInput | user_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_details.
     */
    cursor?: user_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_details.
     */
    distinct?: User_detailsScalarFieldEnum | User_detailsScalarFieldEnum[]
  }

  /**
   * user_details findMany
   */
  export type user_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * Filter, which user_details to fetch.
     */
    where?: user_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: user_detailsOrderByWithRelationInput | user_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_details.
     */
    cursor?: user_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    distinct?: User_detailsScalarFieldEnum | User_detailsScalarFieldEnum[]
  }

  /**
   * user_details create
   */
  export type user_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_details.
     */
    data: XOR<user_detailsCreateInput, user_detailsUncheckedCreateInput>
  }

  /**
   * user_details createMany
   */
  export type user_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_details.
     */
    data: user_detailsCreateManyInput | user_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_details createManyAndReturn
   */
  export type user_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many user_details.
     */
    data: user_detailsCreateManyInput | user_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_details update
   */
  export type user_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_details.
     */
    data: XOR<user_detailsUpdateInput, user_detailsUncheckedUpdateInput>
    /**
     * Choose, which user_details to update.
     */
    where: user_detailsWhereUniqueInput
  }

  /**
   * user_details updateMany
   */
  export type user_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_details.
     */
    data: XOR<user_detailsUpdateManyMutationInput, user_detailsUncheckedUpdateManyInput>
    /**
     * Filter which user_details to update
     */
    where?: user_detailsWhereInput
    /**
     * Limit how many user_details to update.
     */
    limit?: number
  }

  /**
   * user_details updateManyAndReturn
   */
  export type user_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * The data used to update user_details.
     */
    data: XOR<user_detailsUpdateManyMutationInput, user_detailsUncheckedUpdateManyInput>
    /**
     * Filter which user_details to update
     */
    where?: user_detailsWhereInput
    /**
     * Limit how many user_details to update.
     */
    limit?: number
  }

  /**
   * user_details upsert
   */
  export type user_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_details to update in case it exists.
     */
    where: user_detailsWhereUniqueInput
    /**
     * In case the user_details found by the `where` argument doesn't exist, create a new user_details with this data.
     */
    create: XOR<user_detailsCreateInput, user_detailsUncheckedCreateInput>
    /**
     * In case the user_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_detailsUpdateInput, user_detailsUncheckedUpdateInput>
  }

  /**
   * user_details delete
   */
  export type user_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
    /**
     * Filter which user_details to delete.
     */
    where: user_detailsWhereUniqueInput
  }

  /**
   * user_details deleteMany
   */
  export type user_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_details to delete
     */
    where?: user_detailsWhereInput
    /**
     * Limit how many user_details to delete.
     */
    limit?: number
  }

  /**
   * user_details.group_details
   */
  export type user_details$group_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    where?: group_detailsWhereInput
    orderBy?: group_detailsOrderByWithRelationInput | group_detailsOrderByWithRelationInput[]
    cursor?: group_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_detailsScalarFieldEnum | Group_detailsScalarFieldEnum[]
  }

  /**
   * user_details.group_joining_request_details
   */
  export type user_details$group_joining_request_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    where?: group_joining_request_detailsWhereInput
    orderBy?: group_joining_request_detailsOrderByWithRelationInput | group_joining_request_detailsOrderByWithRelationInput[]
    cursor?: group_joining_request_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_joining_request_detailsScalarFieldEnum | Group_joining_request_detailsScalarFieldEnum[]
  }

  /**
   * user_details.notice_board_details
   */
  export type user_details$notice_board_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    where?: notice_board_detailsWhereInput
    orderBy?: notice_board_detailsOrderByWithRelationInput | notice_board_detailsOrderByWithRelationInput[]
    cursor?: notice_board_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Notice_board_detailsScalarFieldEnum | Notice_board_detailsScalarFieldEnum[]
  }

  /**
   * user_details.user_cohort_mapping
   */
  export type user_details$user_cohort_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    where?: user_cohort_mappingWhereInput
    orderBy?: user_cohort_mappingOrderByWithRelationInput | user_cohort_mappingOrderByWithRelationInput[]
    cursor?: user_cohort_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_cohort_mappingScalarFieldEnum | User_cohort_mappingScalarFieldEnum[]
  }

  /**
   * user_details.user_group_mapping
   */
  export type user_details$user_group_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    where?: user_group_mappingWhereInput
    orderBy?: user_group_mappingOrderByWithRelationInput | user_group_mappingOrderByWithRelationInput[]
    cursor?: user_group_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_group_mappingScalarFieldEnum | User_group_mappingScalarFieldEnum[]
  }

  /**
   * user_details without action
   */
  export type user_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_details
     */
    select?: user_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_details
     */
    omit?: user_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_detailsInclude<ExtArgs> | null
  }


  /**
   * Model group_details
   */

  export type AggregateGroup_details = {
    _count: Group_detailsCountAggregateOutputType | null
    _min: Group_detailsMinAggregateOutputType | null
    _max: Group_detailsMaxAggregateOutputType | null
  }

  export type Group_detailsMinAggregateOutputType = {
    id: string | null
    group_name: string | null
    group_desc: string | null
    is_published: boolean | null
    admin_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Group_detailsMaxAggregateOutputType = {
    id: string | null
    group_name: string | null
    group_desc: string | null
    is_published: boolean | null
    admin_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Group_detailsCountAggregateOutputType = {
    id: number
    group_name: number
    group_desc: number
    is_published: number
    admin_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Group_detailsMinAggregateInputType = {
    id?: true
    group_name?: true
    group_desc?: true
    is_published?: true
    admin_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Group_detailsMaxAggregateInputType = {
    id?: true
    group_name?: true
    group_desc?: true
    is_published?: true
    admin_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Group_detailsCountAggregateInputType = {
    id?: true
    group_name?: true
    group_desc?: true
    is_published?: true
    admin_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Group_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_details to aggregate.
     */
    where?: group_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_details to fetch.
     */
    orderBy?: group_detailsOrderByWithRelationInput | group_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_details
    **/
    _count?: true | Group_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_detailsMaxAggregateInputType
  }

  export type GetGroup_detailsAggregateType<T extends Group_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_details[P]>
      : GetScalarType<T[P], AggregateGroup_details[P]>
  }




  export type group_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_detailsWhereInput
    orderBy?: group_detailsOrderByWithAggregationInput | group_detailsOrderByWithAggregationInput[]
    by: Group_detailsScalarFieldEnum[] | Group_detailsScalarFieldEnum
    having?: group_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_detailsCountAggregateInputType | true
    _min?: Group_detailsMinAggregateInputType
    _max?: Group_detailsMaxAggregateInputType
  }

  export type Group_detailsGroupByOutputType = {
    id: string
    group_name: string
    group_desc: string
    is_published: boolean
    admin_id: string
    createdAt: Date
    updatedAt: Date
    _count: Group_detailsCountAggregateOutputType | null
    _min: Group_detailsMinAggregateOutputType | null
    _max: Group_detailsMaxAggregateOutputType | null
  }

  type GetGroup_detailsGroupByPayload<T extends group_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Group_detailsGroupByOutputType[P]>
        }
      >
    >


  export type group_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_name?: boolean
    group_desc?: boolean
    is_published?: boolean
    admin_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean | user_detailsDefaultArgs<ExtArgs>
    group_joining_request_details?: boolean | group_details$group_joining_request_detailsArgs<ExtArgs>
    user_group_mapping?: boolean | group_details$user_group_mappingArgs<ExtArgs>
    _count?: boolean | Group_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_details"]>

  export type group_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_name?: boolean
    group_desc?: boolean
    is_published?: boolean
    admin_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_details"]>

  export type group_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_name?: boolean
    group_desc?: boolean
    is_published?: boolean
    admin_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_details"]>

  export type group_detailsSelectScalar = {
    id?: boolean
    group_name?: boolean
    group_desc?: boolean
    is_published?: boolean
    admin_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type group_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_name" | "group_desc" | "is_published" | "admin_id" | "createdAt" | "updatedAt", ExtArgs["result"]["group_details"]>
  export type group_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | user_detailsDefaultArgs<ExtArgs>
    group_joining_request_details?: boolean | group_details$group_joining_request_detailsArgs<ExtArgs>
    user_group_mapping?: boolean | group_details$user_group_mappingArgs<ExtArgs>
    _count?: boolean | Group_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type group_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type group_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }

  export type $group_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_details"
    objects: {
      created_by: Prisma.$user_detailsPayload<ExtArgs>
      group_joining_request_details: Prisma.$group_joining_request_detailsPayload<ExtArgs>[]
      user_group_mapping: Prisma.$user_group_mappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_name: string
      group_desc: string
      is_published: boolean
      admin_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group_details"]>
    composites: {}
  }

  type group_detailsGetPayload<S extends boolean | null | undefined | group_detailsDefaultArgs> = $Result.GetResult<Prisma.$group_detailsPayload, S>

  type group_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_detailsCountAggregateInputType | true
    }

  export interface group_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_details'], meta: { name: 'group_details' } }
    /**
     * Find zero or one Group_details that matches the filter.
     * @param {group_detailsFindUniqueArgs} args - Arguments to find a Group_details
     * @example
     * // Get one Group_details
     * const group_details = await prisma.group_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_detailsFindUniqueArgs>(args: SelectSubset<T, group_detailsFindUniqueArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_detailsFindUniqueOrThrowArgs} args - Arguments to find a Group_details
     * @example
     * // Get one Group_details
     * const group_details = await prisma.group_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, group_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_detailsFindFirstArgs} args - Arguments to find a Group_details
     * @example
     * // Get one Group_details
     * const group_details = await prisma.group_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_detailsFindFirstArgs>(args?: SelectSubset<T, group_detailsFindFirstArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_detailsFindFirstOrThrowArgs} args - Arguments to find a Group_details
     * @example
     * // Get one Group_details
     * const group_details = await prisma.group_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, group_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_details
     * const group_details = await prisma.group_details.findMany()
     * 
     * // Get first 10 Group_details
     * const group_details = await prisma.group_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_detailsWithIdOnly = await prisma.group_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_detailsFindManyArgs>(args?: SelectSubset<T, group_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_details.
     * @param {group_detailsCreateArgs} args - Arguments to create a Group_details.
     * @example
     * // Create one Group_details
     * const Group_details = await prisma.group_details.create({
     *   data: {
     *     // ... data to create a Group_details
     *   }
     * })
     * 
     */
    create<T extends group_detailsCreateArgs>(args: SelectSubset<T, group_detailsCreateArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_details.
     * @param {group_detailsCreateManyArgs} args - Arguments to create many Group_details.
     * @example
     * // Create many Group_details
     * const group_details = await prisma.group_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_detailsCreateManyArgs>(args?: SelectSubset<T, group_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Group_details and returns the data saved in the database.
     * @param {group_detailsCreateManyAndReturnArgs} args - Arguments to create many Group_details.
     * @example
     * // Create many Group_details
     * const group_details = await prisma.group_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Group_details and only return the `id`
     * const group_detailsWithIdOnly = await prisma.group_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends group_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, group_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group_details.
     * @param {group_detailsDeleteArgs} args - Arguments to delete one Group_details.
     * @example
     * // Delete one Group_details
     * const Group_details = await prisma.group_details.delete({
     *   where: {
     *     // ... filter to delete one Group_details
     *   }
     * })
     * 
     */
    delete<T extends group_detailsDeleteArgs>(args: SelectSubset<T, group_detailsDeleteArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_details.
     * @param {group_detailsUpdateArgs} args - Arguments to update one Group_details.
     * @example
     * // Update one Group_details
     * const group_details = await prisma.group_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_detailsUpdateArgs>(args: SelectSubset<T, group_detailsUpdateArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_details.
     * @param {group_detailsDeleteManyArgs} args - Arguments to filter Group_details to delete.
     * @example
     * // Delete a few Group_details
     * const { count } = await prisma.group_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_detailsDeleteManyArgs>(args?: SelectSubset<T, group_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_details
     * const group_details = await prisma.group_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_detailsUpdateManyArgs>(args: SelectSubset<T, group_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_details and returns the data updated in the database.
     * @param {group_detailsUpdateManyAndReturnArgs} args - Arguments to update many Group_details.
     * @example
     * // Update many Group_details
     * const group_details = await prisma.group_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Group_details and only return the `id`
     * const group_detailsWithIdOnly = await prisma.group_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends group_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, group_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group_details.
     * @param {group_detailsUpsertArgs} args - Arguments to update or create a Group_details.
     * @example
     * // Update or create a Group_details
     * const group_details = await prisma.group_details.upsert({
     *   create: {
     *     // ... data to create a Group_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_details we want to update
     *   }
     * })
     */
    upsert<T extends group_detailsUpsertArgs>(args: SelectSubset<T, group_detailsUpsertArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_detailsCountArgs} args - Arguments to filter Group_details to count.
     * @example
     * // Count the number of Group_details
     * const count = await prisma.group_details.count({
     *   where: {
     *     // ... the filter for the Group_details we want to count
     *   }
     * })
    **/
    count<T extends group_detailsCountArgs>(
      args?: Subset<T, group_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Group_detailsAggregateArgs>(args: Subset<T, Group_detailsAggregateArgs>): Prisma.PrismaPromise<GetGroup_detailsAggregateType<T>>

    /**
     * Group by Group_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends group_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_detailsGroupByArgs['orderBy'] }
        : { orderBy?: group_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, group_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_details model
   */
  readonly fields: group_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends user_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_detailsDefaultArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group_joining_request_details<T extends group_details$group_joining_request_detailsArgs<ExtArgs> = {}>(args?: Subset<T, group_details$group_joining_request_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_group_mapping<T extends group_details$user_group_mappingArgs<ExtArgs> = {}>(args?: Subset<T, group_details$user_group_mappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the group_details model
   */
  interface group_detailsFieldRefs {
    readonly id: FieldRef<"group_details", 'String'>
    readonly group_name: FieldRef<"group_details", 'String'>
    readonly group_desc: FieldRef<"group_details", 'String'>
    readonly is_published: FieldRef<"group_details", 'Boolean'>
    readonly admin_id: FieldRef<"group_details", 'String'>
    readonly createdAt: FieldRef<"group_details", 'DateTime'>
    readonly updatedAt: FieldRef<"group_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * group_details findUnique
   */
  export type group_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_details to fetch.
     */
    where: group_detailsWhereUniqueInput
  }

  /**
   * group_details findUniqueOrThrow
   */
  export type group_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_details to fetch.
     */
    where: group_detailsWhereUniqueInput
  }

  /**
   * group_details findFirst
   */
  export type group_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_details to fetch.
     */
    where?: group_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_details to fetch.
     */
    orderBy?: group_detailsOrderByWithRelationInput | group_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_details.
     */
    cursor?: group_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_details.
     */
    distinct?: Group_detailsScalarFieldEnum | Group_detailsScalarFieldEnum[]
  }

  /**
   * group_details findFirstOrThrow
   */
  export type group_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_details to fetch.
     */
    where?: group_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_details to fetch.
     */
    orderBy?: group_detailsOrderByWithRelationInput | group_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_details.
     */
    cursor?: group_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_details.
     */
    distinct?: Group_detailsScalarFieldEnum | Group_detailsScalarFieldEnum[]
  }

  /**
   * group_details findMany
   */
  export type group_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_details to fetch.
     */
    where?: group_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_details to fetch.
     */
    orderBy?: group_detailsOrderByWithRelationInput | group_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_details.
     */
    cursor?: group_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_details.
     */
    skip?: number
    distinct?: Group_detailsScalarFieldEnum | Group_detailsScalarFieldEnum[]
  }

  /**
   * group_details create
   */
  export type group_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a group_details.
     */
    data: XOR<group_detailsCreateInput, group_detailsUncheckedCreateInput>
  }

  /**
   * group_details createMany
   */
  export type group_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_details.
     */
    data: group_detailsCreateManyInput | group_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_details createManyAndReturn
   */
  export type group_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many group_details.
     */
    data: group_detailsCreateManyInput | group_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_details update
   */
  export type group_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a group_details.
     */
    data: XOR<group_detailsUpdateInput, group_detailsUncheckedUpdateInput>
    /**
     * Choose, which group_details to update.
     */
    where: group_detailsWhereUniqueInput
  }

  /**
   * group_details updateMany
   */
  export type group_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_details.
     */
    data: XOR<group_detailsUpdateManyMutationInput, group_detailsUncheckedUpdateManyInput>
    /**
     * Filter which group_details to update
     */
    where?: group_detailsWhereInput
    /**
     * Limit how many group_details to update.
     */
    limit?: number
  }

  /**
   * group_details updateManyAndReturn
   */
  export type group_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * The data used to update group_details.
     */
    data: XOR<group_detailsUpdateManyMutationInput, group_detailsUncheckedUpdateManyInput>
    /**
     * Filter which group_details to update
     */
    where?: group_detailsWhereInput
    /**
     * Limit how many group_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_details upsert
   */
  export type group_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the group_details to update in case it exists.
     */
    where: group_detailsWhereUniqueInput
    /**
     * In case the group_details found by the `where` argument doesn't exist, create a new group_details with this data.
     */
    create: XOR<group_detailsCreateInput, group_detailsUncheckedCreateInput>
    /**
     * In case the group_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_detailsUpdateInput, group_detailsUncheckedUpdateInput>
  }

  /**
   * group_details delete
   */
  export type group_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
    /**
     * Filter which group_details to delete.
     */
    where: group_detailsWhereUniqueInput
  }

  /**
   * group_details deleteMany
   */
  export type group_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_details to delete
     */
    where?: group_detailsWhereInput
    /**
     * Limit how many group_details to delete.
     */
    limit?: number
  }

  /**
   * group_details.group_joining_request_details
   */
  export type group_details$group_joining_request_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    where?: group_joining_request_detailsWhereInput
    orderBy?: group_joining_request_detailsOrderByWithRelationInput | group_joining_request_detailsOrderByWithRelationInput[]
    cursor?: group_joining_request_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_joining_request_detailsScalarFieldEnum | Group_joining_request_detailsScalarFieldEnum[]
  }

  /**
   * group_details.user_group_mapping
   */
  export type group_details$user_group_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    where?: user_group_mappingWhereInput
    orderBy?: user_group_mappingOrderByWithRelationInput | user_group_mappingOrderByWithRelationInput[]
    cursor?: user_group_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_group_mappingScalarFieldEnum | User_group_mappingScalarFieldEnum[]
  }

  /**
   * group_details without action
   */
  export type group_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_details
     */
    select?: group_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_details
     */
    omit?: group_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_detailsInclude<ExtArgs> | null
  }


  /**
   * Model user_cohort_mapping
   */

  export type AggregateUser_cohort_mapping = {
    _count: User_cohort_mappingCountAggregateOutputType | null
    _min: User_cohort_mappingMinAggregateOutputType | null
    _max: User_cohort_mappingMaxAggregateOutputType | null
  }

  export type User_cohort_mappingMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    cohort_id: string | null
  }

  export type User_cohort_mappingMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    cohort_id: string | null
  }

  export type User_cohort_mappingCountAggregateOutputType = {
    id: number
    user_id: number
    cohort_id: number
    _all: number
  }


  export type User_cohort_mappingMinAggregateInputType = {
    id?: true
    user_id?: true
    cohort_id?: true
  }

  export type User_cohort_mappingMaxAggregateInputType = {
    id?: true
    user_id?: true
    cohort_id?: true
  }

  export type User_cohort_mappingCountAggregateInputType = {
    id?: true
    user_id?: true
    cohort_id?: true
    _all?: true
  }

  export type User_cohort_mappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_cohort_mapping to aggregate.
     */
    where?: user_cohort_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cohort_mappings to fetch.
     */
    orderBy?: user_cohort_mappingOrderByWithRelationInput | user_cohort_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_cohort_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cohort_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cohort_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_cohort_mappings
    **/
    _count?: true | User_cohort_mappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_cohort_mappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_cohort_mappingMaxAggregateInputType
  }

  export type GetUser_cohort_mappingAggregateType<T extends User_cohort_mappingAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_cohort_mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_cohort_mapping[P]>
      : GetScalarType<T[P], AggregateUser_cohort_mapping[P]>
  }




  export type user_cohort_mappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_cohort_mappingWhereInput
    orderBy?: user_cohort_mappingOrderByWithAggregationInput | user_cohort_mappingOrderByWithAggregationInput[]
    by: User_cohort_mappingScalarFieldEnum[] | User_cohort_mappingScalarFieldEnum
    having?: user_cohort_mappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_cohort_mappingCountAggregateInputType | true
    _min?: User_cohort_mappingMinAggregateInputType
    _max?: User_cohort_mappingMaxAggregateInputType
  }

  export type User_cohort_mappingGroupByOutputType = {
    id: string
    user_id: string
    cohort_id: string
    _count: User_cohort_mappingCountAggregateOutputType | null
    _min: User_cohort_mappingMinAggregateOutputType | null
    _max: User_cohort_mappingMaxAggregateOutputType | null
  }

  type GetUser_cohort_mappingGroupByPayload<T extends user_cohort_mappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_cohort_mappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_cohort_mappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_cohort_mappingGroupByOutputType[P]>
            : GetScalarType<T[P], User_cohort_mappingGroupByOutputType[P]>
        }
      >
    >


  export type user_cohort_mappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    cohort_id?: boolean
    cohort?: boolean | cohort_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_cohort_mapping"]>

  export type user_cohort_mappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    cohort_id?: boolean
    cohort?: boolean | cohort_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_cohort_mapping"]>

  export type user_cohort_mappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    cohort_id?: boolean
    cohort?: boolean | cohort_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_cohort_mapping"]>

  export type user_cohort_mappingSelectScalar = {
    id?: boolean
    user_id?: boolean
    cohort_id?: boolean
  }

  export type user_cohort_mappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "cohort_id", ExtArgs["result"]["user_cohort_mapping"]>
  export type user_cohort_mappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | cohort_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type user_cohort_mappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | cohort_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type user_cohort_mappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | cohort_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }

  export type $user_cohort_mappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_cohort_mapping"
    objects: {
      cohort: Prisma.$cohort_detailsPayload<ExtArgs>
      user: Prisma.$user_detailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      cohort_id: string
    }, ExtArgs["result"]["user_cohort_mapping"]>
    composites: {}
  }

  type user_cohort_mappingGetPayload<S extends boolean | null | undefined | user_cohort_mappingDefaultArgs> = $Result.GetResult<Prisma.$user_cohort_mappingPayload, S>

  type user_cohort_mappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_cohort_mappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_cohort_mappingCountAggregateInputType | true
    }

  export interface user_cohort_mappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_cohort_mapping'], meta: { name: 'user_cohort_mapping' } }
    /**
     * Find zero or one User_cohort_mapping that matches the filter.
     * @param {user_cohort_mappingFindUniqueArgs} args - Arguments to find a User_cohort_mapping
     * @example
     * // Get one User_cohort_mapping
     * const user_cohort_mapping = await prisma.user_cohort_mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_cohort_mappingFindUniqueArgs>(args: SelectSubset<T, user_cohort_mappingFindUniqueArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_cohort_mapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_cohort_mappingFindUniqueOrThrowArgs} args - Arguments to find a User_cohort_mapping
     * @example
     * // Get one User_cohort_mapping
     * const user_cohort_mapping = await prisma.user_cohort_mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_cohort_mappingFindUniqueOrThrowArgs>(args: SelectSubset<T, user_cohort_mappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_cohort_mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cohort_mappingFindFirstArgs} args - Arguments to find a User_cohort_mapping
     * @example
     * // Get one User_cohort_mapping
     * const user_cohort_mapping = await prisma.user_cohort_mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_cohort_mappingFindFirstArgs>(args?: SelectSubset<T, user_cohort_mappingFindFirstArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_cohort_mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cohort_mappingFindFirstOrThrowArgs} args - Arguments to find a User_cohort_mapping
     * @example
     * // Get one User_cohort_mapping
     * const user_cohort_mapping = await prisma.user_cohort_mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_cohort_mappingFindFirstOrThrowArgs>(args?: SelectSubset<T, user_cohort_mappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_cohort_mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cohort_mappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_cohort_mappings
     * const user_cohort_mappings = await prisma.user_cohort_mapping.findMany()
     * 
     * // Get first 10 User_cohort_mappings
     * const user_cohort_mappings = await prisma.user_cohort_mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_cohort_mappingWithIdOnly = await prisma.user_cohort_mapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_cohort_mappingFindManyArgs>(args?: SelectSubset<T, user_cohort_mappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_cohort_mapping.
     * @param {user_cohort_mappingCreateArgs} args - Arguments to create a User_cohort_mapping.
     * @example
     * // Create one User_cohort_mapping
     * const User_cohort_mapping = await prisma.user_cohort_mapping.create({
     *   data: {
     *     // ... data to create a User_cohort_mapping
     *   }
     * })
     * 
     */
    create<T extends user_cohort_mappingCreateArgs>(args: SelectSubset<T, user_cohort_mappingCreateArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_cohort_mappings.
     * @param {user_cohort_mappingCreateManyArgs} args - Arguments to create many User_cohort_mappings.
     * @example
     * // Create many User_cohort_mappings
     * const user_cohort_mapping = await prisma.user_cohort_mapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_cohort_mappingCreateManyArgs>(args?: SelectSubset<T, user_cohort_mappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_cohort_mappings and returns the data saved in the database.
     * @param {user_cohort_mappingCreateManyAndReturnArgs} args - Arguments to create many User_cohort_mappings.
     * @example
     * // Create many User_cohort_mappings
     * const user_cohort_mapping = await prisma.user_cohort_mapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_cohort_mappings and only return the `id`
     * const user_cohort_mappingWithIdOnly = await prisma.user_cohort_mapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_cohort_mappingCreateManyAndReturnArgs>(args?: SelectSubset<T, user_cohort_mappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_cohort_mapping.
     * @param {user_cohort_mappingDeleteArgs} args - Arguments to delete one User_cohort_mapping.
     * @example
     * // Delete one User_cohort_mapping
     * const User_cohort_mapping = await prisma.user_cohort_mapping.delete({
     *   where: {
     *     // ... filter to delete one User_cohort_mapping
     *   }
     * })
     * 
     */
    delete<T extends user_cohort_mappingDeleteArgs>(args: SelectSubset<T, user_cohort_mappingDeleteArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_cohort_mapping.
     * @param {user_cohort_mappingUpdateArgs} args - Arguments to update one User_cohort_mapping.
     * @example
     * // Update one User_cohort_mapping
     * const user_cohort_mapping = await prisma.user_cohort_mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_cohort_mappingUpdateArgs>(args: SelectSubset<T, user_cohort_mappingUpdateArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_cohort_mappings.
     * @param {user_cohort_mappingDeleteManyArgs} args - Arguments to filter User_cohort_mappings to delete.
     * @example
     * // Delete a few User_cohort_mappings
     * const { count } = await prisma.user_cohort_mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_cohort_mappingDeleteManyArgs>(args?: SelectSubset<T, user_cohort_mappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_cohort_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cohort_mappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_cohort_mappings
     * const user_cohort_mapping = await prisma.user_cohort_mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_cohort_mappingUpdateManyArgs>(args: SelectSubset<T, user_cohort_mappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_cohort_mappings and returns the data updated in the database.
     * @param {user_cohort_mappingUpdateManyAndReturnArgs} args - Arguments to update many User_cohort_mappings.
     * @example
     * // Update many User_cohort_mappings
     * const user_cohort_mapping = await prisma.user_cohort_mapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_cohort_mappings and only return the `id`
     * const user_cohort_mappingWithIdOnly = await prisma.user_cohort_mapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_cohort_mappingUpdateManyAndReturnArgs>(args: SelectSubset<T, user_cohort_mappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_cohort_mapping.
     * @param {user_cohort_mappingUpsertArgs} args - Arguments to update or create a User_cohort_mapping.
     * @example
     * // Update or create a User_cohort_mapping
     * const user_cohort_mapping = await prisma.user_cohort_mapping.upsert({
     *   create: {
     *     // ... data to create a User_cohort_mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_cohort_mapping we want to update
     *   }
     * })
     */
    upsert<T extends user_cohort_mappingUpsertArgs>(args: SelectSubset<T, user_cohort_mappingUpsertArgs<ExtArgs>>): Prisma__user_cohort_mappingClient<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_cohort_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cohort_mappingCountArgs} args - Arguments to filter User_cohort_mappings to count.
     * @example
     * // Count the number of User_cohort_mappings
     * const count = await prisma.user_cohort_mapping.count({
     *   where: {
     *     // ... the filter for the User_cohort_mappings we want to count
     *   }
     * })
    **/
    count<T extends user_cohort_mappingCountArgs>(
      args?: Subset<T, user_cohort_mappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_cohort_mappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_cohort_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_cohort_mappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_cohort_mappingAggregateArgs>(args: Subset<T, User_cohort_mappingAggregateArgs>): Prisma.PrismaPromise<GetUser_cohort_mappingAggregateType<T>>

    /**
     * Group by User_cohort_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cohort_mappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_cohort_mappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_cohort_mappingGroupByArgs['orderBy'] }
        : { orderBy?: user_cohort_mappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_cohort_mappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_cohort_mappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_cohort_mapping model
   */
  readonly fields: user_cohort_mappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_cohort_mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_cohort_mappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cohort<T extends cohort_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cohort_detailsDefaultArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends user_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_detailsDefaultArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_cohort_mapping model
   */
  interface user_cohort_mappingFieldRefs {
    readonly id: FieldRef<"user_cohort_mapping", 'String'>
    readonly user_id: FieldRef<"user_cohort_mapping", 'String'>
    readonly cohort_id: FieldRef<"user_cohort_mapping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_cohort_mapping findUnique
   */
  export type user_cohort_mappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_cohort_mapping to fetch.
     */
    where: user_cohort_mappingWhereUniqueInput
  }

  /**
   * user_cohort_mapping findUniqueOrThrow
   */
  export type user_cohort_mappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_cohort_mapping to fetch.
     */
    where: user_cohort_mappingWhereUniqueInput
  }

  /**
   * user_cohort_mapping findFirst
   */
  export type user_cohort_mappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_cohort_mapping to fetch.
     */
    where?: user_cohort_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cohort_mappings to fetch.
     */
    orderBy?: user_cohort_mappingOrderByWithRelationInput | user_cohort_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_cohort_mappings.
     */
    cursor?: user_cohort_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cohort_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cohort_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_cohort_mappings.
     */
    distinct?: User_cohort_mappingScalarFieldEnum | User_cohort_mappingScalarFieldEnum[]
  }

  /**
   * user_cohort_mapping findFirstOrThrow
   */
  export type user_cohort_mappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_cohort_mapping to fetch.
     */
    where?: user_cohort_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cohort_mappings to fetch.
     */
    orderBy?: user_cohort_mappingOrderByWithRelationInput | user_cohort_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_cohort_mappings.
     */
    cursor?: user_cohort_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cohort_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cohort_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_cohort_mappings.
     */
    distinct?: User_cohort_mappingScalarFieldEnum | User_cohort_mappingScalarFieldEnum[]
  }

  /**
   * user_cohort_mapping findMany
   */
  export type user_cohort_mappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_cohort_mappings to fetch.
     */
    where?: user_cohort_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cohort_mappings to fetch.
     */
    orderBy?: user_cohort_mappingOrderByWithRelationInput | user_cohort_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_cohort_mappings.
     */
    cursor?: user_cohort_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cohort_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cohort_mappings.
     */
    skip?: number
    distinct?: User_cohort_mappingScalarFieldEnum | User_cohort_mappingScalarFieldEnum[]
  }

  /**
   * user_cohort_mapping create
   */
  export type user_cohort_mappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * The data needed to create a user_cohort_mapping.
     */
    data: XOR<user_cohort_mappingCreateInput, user_cohort_mappingUncheckedCreateInput>
  }

  /**
   * user_cohort_mapping createMany
   */
  export type user_cohort_mappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_cohort_mappings.
     */
    data: user_cohort_mappingCreateManyInput | user_cohort_mappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_cohort_mapping createManyAndReturn
   */
  export type user_cohort_mappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * The data used to create many user_cohort_mappings.
     */
    data: user_cohort_mappingCreateManyInput | user_cohort_mappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_cohort_mapping update
   */
  export type user_cohort_mappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * The data needed to update a user_cohort_mapping.
     */
    data: XOR<user_cohort_mappingUpdateInput, user_cohort_mappingUncheckedUpdateInput>
    /**
     * Choose, which user_cohort_mapping to update.
     */
    where: user_cohort_mappingWhereUniqueInput
  }

  /**
   * user_cohort_mapping updateMany
   */
  export type user_cohort_mappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_cohort_mappings.
     */
    data: XOR<user_cohort_mappingUpdateManyMutationInput, user_cohort_mappingUncheckedUpdateManyInput>
    /**
     * Filter which user_cohort_mappings to update
     */
    where?: user_cohort_mappingWhereInput
    /**
     * Limit how many user_cohort_mappings to update.
     */
    limit?: number
  }

  /**
   * user_cohort_mapping updateManyAndReturn
   */
  export type user_cohort_mappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * The data used to update user_cohort_mappings.
     */
    data: XOR<user_cohort_mappingUpdateManyMutationInput, user_cohort_mappingUncheckedUpdateManyInput>
    /**
     * Filter which user_cohort_mappings to update
     */
    where?: user_cohort_mappingWhereInput
    /**
     * Limit how many user_cohort_mappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_cohort_mapping upsert
   */
  export type user_cohort_mappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * The filter to search for the user_cohort_mapping to update in case it exists.
     */
    where: user_cohort_mappingWhereUniqueInput
    /**
     * In case the user_cohort_mapping found by the `where` argument doesn't exist, create a new user_cohort_mapping with this data.
     */
    create: XOR<user_cohort_mappingCreateInput, user_cohort_mappingUncheckedCreateInput>
    /**
     * In case the user_cohort_mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_cohort_mappingUpdateInput, user_cohort_mappingUncheckedUpdateInput>
  }

  /**
   * user_cohort_mapping delete
   */
  export type user_cohort_mappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    /**
     * Filter which user_cohort_mapping to delete.
     */
    where: user_cohort_mappingWhereUniqueInput
  }

  /**
   * user_cohort_mapping deleteMany
   */
  export type user_cohort_mappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_cohort_mappings to delete
     */
    where?: user_cohort_mappingWhereInput
    /**
     * Limit how many user_cohort_mappings to delete.
     */
    limit?: number
  }

  /**
   * user_cohort_mapping without action
   */
  export type user_cohort_mappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
  }


  /**
   * Model cohort_details
   */

  export type AggregateCohort_details = {
    _count: Cohort_detailsCountAggregateOutputType | null
    _min: Cohort_detailsMinAggregateOutputType | null
    _max: Cohort_detailsMaxAggregateOutputType | null
  }

  export type Cohort_detailsMinAggregateOutputType = {
    id: string | null
    cohort_name: string | null
  }

  export type Cohort_detailsMaxAggregateOutputType = {
    id: string | null
    cohort_name: string | null
  }

  export type Cohort_detailsCountAggregateOutputType = {
    id: number
    cohort_name: number
    _all: number
  }


  export type Cohort_detailsMinAggregateInputType = {
    id?: true
    cohort_name?: true
  }

  export type Cohort_detailsMaxAggregateInputType = {
    id?: true
    cohort_name?: true
  }

  export type Cohort_detailsCountAggregateInputType = {
    id?: true
    cohort_name?: true
    _all?: true
  }

  export type Cohort_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cohort_details to aggregate.
     */
    where?: cohort_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cohort_details to fetch.
     */
    orderBy?: cohort_detailsOrderByWithRelationInput | cohort_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cohort_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cohort_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cohort_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cohort_details
    **/
    _count?: true | Cohort_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cohort_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cohort_detailsMaxAggregateInputType
  }

  export type GetCohort_detailsAggregateType<T extends Cohort_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCohort_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCohort_details[P]>
      : GetScalarType<T[P], AggregateCohort_details[P]>
  }




  export type cohort_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cohort_detailsWhereInput
    orderBy?: cohort_detailsOrderByWithAggregationInput | cohort_detailsOrderByWithAggregationInput[]
    by: Cohort_detailsScalarFieldEnum[] | Cohort_detailsScalarFieldEnum
    having?: cohort_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cohort_detailsCountAggregateInputType | true
    _min?: Cohort_detailsMinAggregateInputType
    _max?: Cohort_detailsMaxAggregateInputType
  }

  export type Cohort_detailsGroupByOutputType = {
    id: string
    cohort_name: string
    _count: Cohort_detailsCountAggregateOutputType | null
    _min: Cohort_detailsMinAggregateOutputType | null
    _max: Cohort_detailsMaxAggregateOutputType | null
  }

  type GetCohort_detailsGroupByPayload<T extends cohort_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cohort_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cohort_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cohort_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Cohort_detailsGroupByOutputType[P]>
        }
      >
    >


  export type cohort_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohort_name?: boolean
    userCohorts?: boolean | cohort_details$userCohortsArgs<ExtArgs>
    _count?: boolean | Cohort_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohort_details"]>

  export type cohort_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohort_name?: boolean
  }, ExtArgs["result"]["cohort_details"]>

  export type cohort_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohort_name?: boolean
  }, ExtArgs["result"]["cohort_details"]>

  export type cohort_detailsSelectScalar = {
    id?: boolean
    cohort_name?: boolean
  }

  export type cohort_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohort_name", ExtArgs["result"]["cohort_details"]>
  export type cohort_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCohorts?: boolean | cohort_details$userCohortsArgs<ExtArgs>
    _count?: boolean | Cohort_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cohort_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cohort_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cohort_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cohort_details"
    objects: {
      userCohorts: Prisma.$user_cohort_mappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohort_name: string
    }, ExtArgs["result"]["cohort_details"]>
    composites: {}
  }

  type cohort_detailsGetPayload<S extends boolean | null | undefined | cohort_detailsDefaultArgs> = $Result.GetResult<Prisma.$cohort_detailsPayload, S>

  type cohort_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cohort_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cohort_detailsCountAggregateInputType | true
    }

  export interface cohort_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cohort_details'], meta: { name: 'cohort_details' } }
    /**
     * Find zero or one Cohort_details that matches the filter.
     * @param {cohort_detailsFindUniqueArgs} args - Arguments to find a Cohort_details
     * @example
     * // Get one Cohort_details
     * const cohort_details = await prisma.cohort_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cohort_detailsFindUniqueArgs>(args: SelectSubset<T, cohort_detailsFindUniqueArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cohort_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cohort_detailsFindUniqueOrThrowArgs} args - Arguments to find a Cohort_details
     * @example
     * // Get one Cohort_details
     * const cohort_details = await prisma.cohort_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cohort_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, cohort_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cohort_detailsFindFirstArgs} args - Arguments to find a Cohort_details
     * @example
     * // Get one Cohort_details
     * const cohort_details = await prisma.cohort_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cohort_detailsFindFirstArgs>(args?: SelectSubset<T, cohort_detailsFindFirstArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cohort_detailsFindFirstOrThrowArgs} args - Arguments to find a Cohort_details
     * @example
     * // Get one Cohort_details
     * const cohort_details = await prisma.cohort_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cohort_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, cohort_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cohort_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cohort_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cohort_details
     * const cohort_details = await prisma.cohort_details.findMany()
     * 
     * // Get first 10 Cohort_details
     * const cohort_details = await prisma.cohort_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cohort_detailsWithIdOnly = await prisma.cohort_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cohort_detailsFindManyArgs>(args?: SelectSubset<T, cohort_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cohort_details.
     * @param {cohort_detailsCreateArgs} args - Arguments to create a Cohort_details.
     * @example
     * // Create one Cohort_details
     * const Cohort_details = await prisma.cohort_details.create({
     *   data: {
     *     // ... data to create a Cohort_details
     *   }
     * })
     * 
     */
    create<T extends cohort_detailsCreateArgs>(args: SelectSubset<T, cohort_detailsCreateArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cohort_details.
     * @param {cohort_detailsCreateManyArgs} args - Arguments to create many Cohort_details.
     * @example
     * // Create many Cohort_details
     * const cohort_details = await prisma.cohort_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cohort_detailsCreateManyArgs>(args?: SelectSubset<T, cohort_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cohort_details and returns the data saved in the database.
     * @param {cohort_detailsCreateManyAndReturnArgs} args - Arguments to create many Cohort_details.
     * @example
     * // Create many Cohort_details
     * const cohort_details = await prisma.cohort_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cohort_details and only return the `id`
     * const cohort_detailsWithIdOnly = await prisma.cohort_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cohort_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, cohort_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cohort_details.
     * @param {cohort_detailsDeleteArgs} args - Arguments to delete one Cohort_details.
     * @example
     * // Delete one Cohort_details
     * const Cohort_details = await prisma.cohort_details.delete({
     *   where: {
     *     // ... filter to delete one Cohort_details
     *   }
     * })
     * 
     */
    delete<T extends cohort_detailsDeleteArgs>(args: SelectSubset<T, cohort_detailsDeleteArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cohort_details.
     * @param {cohort_detailsUpdateArgs} args - Arguments to update one Cohort_details.
     * @example
     * // Update one Cohort_details
     * const cohort_details = await prisma.cohort_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cohort_detailsUpdateArgs>(args: SelectSubset<T, cohort_detailsUpdateArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cohort_details.
     * @param {cohort_detailsDeleteManyArgs} args - Arguments to filter Cohort_details to delete.
     * @example
     * // Delete a few Cohort_details
     * const { count } = await prisma.cohort_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cohort_detailsDeleteManyArgs>(args?: SelectSubset<T, cohort_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohort_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cohort_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cohort_details
     * const cohort_details = await prisma.cohort_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cohort_detailsUpdateManyArgs>(args: SelectSubset<T, cohort_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohort_details and returns the data updated in the database.
     * @param {cohort_detailsUpdateManyAndReturnArgs} args - Arguments to update many Cohort_details.
     * @example
     * // Update many Cohort_details
     * const cohort_details = await prisma.cohort_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cohort_details and only return the `id`
     * const cohort_detailsWithIdOnly = await prisma.cohort_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cohort_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, cohort_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cohort_details.
     * @param {cohort_detailsUpsertArgs} args - Arguments to update or create a Cohort_details.
     * @example
     * // Update or create a Cohort_details
     * const cohort_details = await prisma.cohort_details.upsert({
     *   create: {
     *     // ... data to create a Cohort_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cohort_details we want to update
     *   }
     * })
     */
    upsert<T extends cohort_detailsUpsertArgs>(args: SelectSubset<T, cohort_detailsUpsertArgs<ExtArgs>>): Prisma__cohort_detailsClient<$Result.GetResult<Prisma.$cohort_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cohort_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cohort_detailsCountArgs} args - Arguments to filter Cohort_details to count.
     * @example
     * // Count the number of Cohort_details
     * const count = await prisma.cohort_details.count({
     *   where: {
     *     // ... the filter for the Cohort_details we want to count
     *   }
     * })
    **/
    count<T extends cohort_detailsCountArgs>(
      args?: Subset<T, cohort_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cohort_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cohort_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cohort_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cohort_detailsAggregateArgs>(args: Subset<T, Cohort_detailsAggregateArgs>): Prisma.PrismaPromise<GetCohort_detailsAggregateType<T>>

    /**
     * Group by Cohort_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cohort_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cohort_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cohort_detailsGroupByArgs['orderBy'] }
        : { orderBy?: cohort_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cohort_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCohort_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cohort_details model
   */
  readonly fields: cohort_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cohort_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cohort_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCohorts<T extends cohort_details$userCohortsArgs<ExtArgs> = {}>(args?: Subset<T, cohort_details$userCohortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cohort_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cohort_details model
   */
  interface cohort_detailsFieldRefs {
    readonly id: FieldRef<"cohort_details", 'String'>
    readonly cohort_name: FieldRef<"cohort_details", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cohort_details findUnique
   */
  export type cohort_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * Filter, which cohort_details to fetch.
     */
    where: cohort_detailsWhereUniqueInput
  }

  /**
   * cohort_details findUniqueOrThrow
   */
  export type cohort_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * Filter, which cohort_details to fetch.
     */
    where: cohort_detailsWhereUniqueInput
  }

  /**
   * cohort_details findFirst
   */
  export type cohort_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * Filter, which cohort_details to fetch.
     */
    where?: cohort_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cohort_details to fetch.
     */
    orderBy?: cohort_detailsOrderByWithRelationInput | cohort_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cohort_details.
     */
    cursor?: cohort_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cohort_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cohort_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cohort_details.
     */
    distinct?: Cohort_detailsScalarFieldEnum | Cohort_detailsScalarFieldEnum[]
  }

  /**
   * cohort_details findFirstOrThrow
   */
  export type cohort_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * Filter, which cohort_details to fetch.
     */
    where?: cohort_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cohort_details to fetch.
     */
    orderBy?: cohort_detailsOrderByWithRelationInput | cohort_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cohort_details.
     */
    cursor?: cohort_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cohort_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cohort_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cohort_details.
     */
    distinct?: Cohort_detailsScalarFieldEnum | Cohort_detailsScalarFieldEnum[]
  }

  /**
   * cohort_details findMany
   */
  export type cohort_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * Filter, which cohort_details to fetch.
     */
    where?: cohort_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cohort_details to fetch.
     */
    orderBy?: cohort_detailsOrderByWithRelationInput | cohort_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cohort_details.
     */
    cursor?: cohort_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cohort_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cohort_details.
     */
    skip?: number
    distinct?: Cohort_detailsScalarFieldEnum | Cohort_detailsScalarFieldEnum[]
  }

  /**
   * cohort_details create
   */
  export type cohort_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a cohort_details.
     */
    data: XOR<cohort_detailsCreateInput, cohort_detailsUncheckedCreateInput>
  }

  /**
   * cohort_details createMany
   */
  export type cohort_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cohort_details.
     */
    data: cohort_detailsCreateManyInput | cohort_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cohort_details createManyAndReturn
   */
  export type cohort_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many cohort_details.
     */
    data: cohort_detailsCreateManyInput | cohort_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cohort_details update
   */
  export type cohort_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a cohort_details.
     */
    data: XOR<cohort_detailsUpdateInput, cohort_detailsUncheckedUpdateInput>
    /**
     * Choose, which cohort_details to update.
     */
    where: cohort_detailsWhereUniqueInput
  }

  /**
   * cohort_details updateMany
   */
  export type cohort_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cohort_details.
     */
    data: XOR<cohort_detailsUpdateManyMutationInput, cohort_detailsUncheckedUpdateManyInput>
    /**
     * Filter which cohort_details to update
     */
    where?: cohort_detailsWhereInput
    /**
     * Limit how many cohort_details to update.
     */
    limit?: number
  }

  /**
   * cohort_details updateManyAndReturn
   */
  export type cohort_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * The data used to update cohort_details.
     */
    data: XOR<cohort_detailsUpdateManyMutationInput, cohort_detailsUncheckedUpdateManyInput>
    /**
     * Filter which cohort_details to update
     */
    where?: cohort_detailsWhereInput
    /**
     * Limit how many cohort_details to update.
     */
    limit?: number
  }

  /**
   * cohort_details upsert
   */
  export type cohort_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the cohort_details to update in case it exists.
     */
    where: cohort_detailsWhereUniqueInput
    /**
     * In case the cohort_details found by the `where` argument doesn't exist, create a new cohort_details with this data.
     */
    create: XOR<cohort_detailsCreateInput, cohort_detailsUncheckedCreateInput>
    /**
     * In case the cohort_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cohort_detailsUpdateInput, cohort_detailsUncheckedUpdateInput>
  }

  /**
   * cohort_details delete
   */
  export type cohort_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
    /**
     * Filter which cohort_details to delete.
     */
    where: cohort_detailsWhereUniqueInput
  }

  /**
   * cohort_details deleteMany
   */
  export type cohort_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cohort_details to delete
     */
    where?: cohort_detailsWhereInput
    /**
     * Limit how many cohort_details to delete.
     */
    limit?: number
  }

  /**
   * cohort_details.userCohorts
   */
  export type cohort_details$userCohortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cohort_mapping
     */
    select?: user_cohort_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cohort_mapping
     */
    omit?: user_cohort_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cohort_mappingInclude<ExtArgs> | null
    where?: user_cohort_mappingWhereInput
    orderBy?: user_cohort_mappingOrderByWithRelationInput | user_cohort_mappingOrderByWithRelationInput[]
    cursor?: user_cohort_mappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_cohort_mappingScalarFieldEnum | User_cohort_mappingScalarFieldEnum[]
  }

  /**
   * cohort_details without action
   */
  export type cohort_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cohort_details
     */
    select?: cohort_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cohort_details
     */
    omit?: cohort_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cohort_detailsInclude<ExtArgs> | null
  }


  /**
   * Model group_joining_request_details
   */

  export type AggregateGroup_joining_request_details = {
    _count: Group_joining_request_detailsCountAggregateOutputType | null
    _min: Group_joining_request_detailsMinAggregateOutputType | null
    _max: Group_joining_request_detailsMaxAggregateOutputType | null
  }

  export type Group_joining_request_detailsMinAggregateOutputType = {
    id: string | null
    group_id: string | null
    user_id: string | null
    request_note_by_user: string | null
    rejection_remark: string | null
    requested_on: Date | null
    responded_on: Date | null
  }

  export type Group_joining_request_detailsMaxAggregateOutputType = {
    id: string | null
    group_id: string | null
    user_id: string | null
    request_note_by_user: string | null
    rejection_remark: string | null
    requested_on: Date | null
    responded_on: Date | null
  }

  export type Group_joining_request_detailsCountAggregateOutputType = {
    id: number
    group_id: number
    user_id: number
    request_note_by_user: number
    rejection_remark: number
    requested_on: number
    responded_on: number
    _all: number
  }


  export type Group_joining_request_detailsMinAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    request_note_by_user?: true
    rejection_remark?: true
    requested_on?: true
    responded_on?: true
  }

  export type Group_joining_request_detailsMaxAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    request_note_by_user?: true
    rejection_remark?: true
    requested_on?: true
    responded_on?: true
  }

  export type Group_joining_request_detailsCountAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    request_note_by_user?: true
    rejection_remark?: true
    requested_on?: true
    responded_on?: true
    _all?: true
  }

  export type Group_joining_request_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_joining_request_details to aggregate.
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_joining_request_details to fetch.
     */
    orderBy?: group_joining_request_detailsOrderByWithRelationInput | group_joining_request_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_joining_request_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_joining_request_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_joining_request_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_joining_request_details
    **/
    _count?: true | Group_joining_request_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_joining_request_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_joining_request_detailsMaxAggregateInputType
  }

  export type GetGroup_joining_request_detailsAggregateType<T extends Group_joining_request_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_joining_request_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_joining_request_details[P]>
      : GetScalarType<T[P], AggregateGroup_joining_request_details[P]>
  }




  export type group_joining_request_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_joining_request_detailsWhereInput
    orderBy?: group_joining_request_detailsOrderByWithAggregationInput | group_joining_request_detailsOrderByWithAggregationInput[]
    by: Group_joining_request_detailsScalarFieldEnum[] | Group_joining_request_detailsScalarFieldEnum
    having?: group_joining_request_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_joining_request_detailsCountAggregateInputType | true
    _min?: Group_joining_request_detailsMinAggregateInputType
    _max?: Group_joining_request_detailsMaxAggregateInputType
  }

  export type Group_joining_request_detailsGroupByOutputType = {
    id: string
    group_id: string
    user_id: string
    request_note_by_user: string | null
    rejection_remark: string | null
    requested_on: Date | null
    responded_on: Date | null
    _count: Group_joining_request_detailsCountAggregateOutputType | null
    _min: Group_joining_request_detailsMinAggregateOutputType | null
    _max: Group_joining_request_detailsMaxAggregateOutputType | null
  }

  type GetGroup_joining_request_detailsGroupByPayload<T extends group_joining_request_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_joining_request_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_joining_request_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_joining_request_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Group_joining_request_detailsGroupByOutputType[P]>
        }
      >
    >


  export type group_joining_request_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    request_note_by_user?: boolean
    rejection_remark?: boolean
    requested_on?: boolean
    responded_on?: boolean
    group?: boolean | group_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_joining_request_details"]>

  export type group_joining_request_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    request_note_by_user?: boolean
    rejection_remark?: boolean
    requested_on?: boolean
    responded_on?: boolean
    group?: boolean | group_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_joining_request_details"]>

  export type group_joining_request_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    request_note_by_user?: boolean
    rejection_remark?: boolean
    requested_on?: boolean
    responded_on?: boolean
    group?: boolean | group_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_joining_request_details"]>

  export type group_joining_request_detailsSelectScalar = {
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    request_note_by_user?: boolean
    rejection_remark?: boolean
    requested_on?: boolean
    responded_on?: boolean
  }

  export type group_joining_request_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "user_id" | "request_note_by_user" | "rejection_remark" | "requested_on" | "responded_on", ExtArgs["result"]["group_joining_request_details"]>
  export type group_joining_request_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | group_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type group_joining_request_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | group_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type group_joining_request_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | group_detailsDefaultArgs<ExtArgs>
    user?: boolean | user_detailsDefaultArgs<ExtArgs>
  }

  export type $group_joining_request_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_joining_request_details"
    objects: {
      group: Prisma.$group_detailsPayload<ExtArgs>
      user: Prisma.$user_detailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_id: string
      user_id: string
      request_note_by_user: string | null
      rejection_remark: string | null
      requested_on: Date | null
      responded_on: Date | null
    }, ExtArgs["result"]["group_joining_request_details"]>
    composites: {}
  }

  type group_joining_request_detailsGetPayload<S extends boolean | null | undefined | group_joining_request_detailsDefaultArgs> = $Result.GetResult<Prisma.$group_joining_request_detailsPayload, S>

  type group_joining_request_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_joining_request_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_joining_request_detailsCountAggregateInputType | true
    }

  export interface group_joining_request_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_joining_request_details'], meta: { name: 'group_joining_request_details' } }
    /**
     * Find zero or one Group_joining_request_details that matches the filter.
     * @param {group_joining_request_detailsFindUniqueArgs} args - Arguments to find a Group_joining_request_details
     * @example
     * // Get one Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_joining_request_detailsFindUniqueArgs>(args: SelectSubset<T, group_joining_request_detailsFindUniqueArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_joining_request_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_joining_request_detailsFindUniqueOrThrowArgs} args - Arguments to find a Group_joining_request_details
     * @example
     * // Get one Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_joining_request_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, group_joining_request_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_joining_request_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_joining_request_detailsFindFirstArgs} args - Arguments to find a Group_joining_request_details
     * @example
     * // Get one Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_joining_request_detailsFindFirstArgs>(args?: SelectSubset<T, group_joining_request_detailsFindFirstArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_joining_request_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_joining_request_detailsFindFirstOrThrowArgs} args - Arguments to find a Group_joining_request_details
     * @example
     * // Get one Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_joining_request_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, group_joining_request_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_joining_request_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_joining_request_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.findMany()
     * 
     * // Get first 10 Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_joining_request_detailsWithIdOnly = await prisma.group_joining_request_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_joining_request_detailsFindManyArgs>(args?: SelectSubset<T, group_joining_request_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_joining_request_details.
     * @param {group_joining_request_detailsCreateArgs} args - Arguments to create a Group_joining_request_details.
     * @example
     * // Create one Group_joining_request_details
     * const Group_joining_request_details = await prisma.group_joining_request_details.create({
     *   data: {
     *     // ... data to create a Group_joining_request_details
     *   }
     * })
     * 
     */
    create<T extends group_joining_request_detailsCreateArgs>(args: SelectSubset<T, group_joining_request_detailsCreateArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_joining_request_details.
     * @param {group_joining_request_detailsCreateManyArgs} args - Arguments to create many Group_joining_request_details.
     * @example
     * // Create many Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_joining_request_detailsCreateManyArgs>(args?: SelectSubset<T, group_joining_request_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Group_joining_request_details and returns the data saved in the database.
     * @param {group_joining_request_detailsCreateManyAndReturnArgs} args - Arguments to create many Group_joining_request_details.
     * @example
     * // Create many Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Group_joining_request_details and only return the `id`
     * const group_joining_request_detailsWithIdOnly = await prisma.group_joining_request_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends group_joining_request_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, group_joining_request_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group_joining_request_details.
     * @param {group_joining_request_detailsDeleteArgs} args - Arguments to delete one Group_joining_request_details.
     * @example
     * // Delete one Group_joining_request_details
     * const Group_joining_request_details = await prisma.group_joining_request_details.delete({
     *   where: {
     *     // ... filter to delete one Group_joining_request_details
     *   }
     * })
     * 
     */
    delete<T extends group_joining_request_detailsDeleteArgs>(args: SelectSubset<T, group_joining_request_detailsDeleteArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_joining_request_details.
     * @param {group_joining_request_detailsUpdateArgs} args - Arguments to update one Group_joining_request_details.
     * @example
     * // Update one Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_joining_request_detailsUpdateArgs>(args: SelectSubset<T, group_joining_request_detailsUpdateArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_joining_request_details.
     * @param {group_joining_request_detailsDeleteManyArgs} args - Arguments to filter Group_joining_request_details to delete.
     * @example
     * // Delete a few Group_joining_request_details
     * const { count } = await prisma.group_joining_request_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_joining_request_detailsDeleteManyArgs>(args?: SelectSubset<T, group_joining_request_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_joining_request_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_joining_request_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_joining_request_detailsUpdateManyArgs>(args: SelectSubset<T, group_joining_request_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_joining_request_details and returns the data updated in the database.
     * @param {group_joining_request_detailsUpdateManyAndReturnArgs} args - Arguments to update many Group_joining_request_details.
     * @example
     * // Update many Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Group_joining_request_details and only return the `id`
     * const group_joining_request_detailsWithIdOnly = await prisma.group_joining_request_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends group_joining_request_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, group_joining_request_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group_joining_request_details.
     * @param {group_joining_request_detailsUpsertArgs} args - Arguments to update or create a Group_joining_request_details.
     * @example
     * // Update or create a Group_joining_request_details
     * const group_joining_request_details = await prisma.group_joining_request_details.upsert({
     *   create: {
     *     // ... data to create a Group_joining_request_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_joining_request_details we want to update
     *   }
     * })
     */
    upsert<T extends group_joining_request_detailsUpsertArgs>(args: SelectSubset<T, group_joining_request_detailsUpsertArgs<ExtArgs>>): Prisma__group_joining_request_detailsClient<$Result.GetResult<Prisma.$group_joining_request_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_joining_request_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_joining_request_detailsCountArgs} args - Arguments to filter Group_joining_request_details to count.
     * @example
     * // Count the number of Group_joining_request_details
     * const count = await prisma.group_joining_request_details.count({
     *   where: {
     *     // ... the filter for the Group_joining_request_details we want to count
     *   }
     * })
    **/
    count<T extends group_joining_request_detailsCountArgs>(
      args?: Subset<T, group_joining_request_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_joining_request_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_joining_request_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_joining_request_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Group_joining_request_detailsAggregateArgs>(args: Subset<T, Group_joining_request_detailsAggregateArgs>): Prisma.PrismaPromise<GetGroup_joining_request_detailsAggregateType<T>>

    /**
     * Group by Group_joining_request_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_joining_request_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends group_joining_request_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_joining_request_detailsGroupByArgs['orderBy'] }
        : { orderBy?: group_joining_request_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, group_joining_request_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_joining_request_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_joining_request_details model
   */
  readonly fields: group_joining_request_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_joining_request_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_joining_request_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends group_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, group_detailsDefaultArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends user_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_detailsDefaultArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the group_joining_request_details model
   */
  interface group_joining_request_detailsFieldRefs {
    readonly id: FieldRef<"group_joining_request_details", 'String'>
    readonly group_id: FieldRef<"group_joining_request_details", 'String'>
    readonly user_id: FieldRef<"group_joining_request_details", 'String'>
    readonly request_note_by_user: FieldRef<"group_joining_request_details", 'String'>
    readonly rejection_remark: FieldRef<"group_joining_request_details", 'String'>
    readonly requested_on: FieldRef<"group_joining_request_details", 'DateTime'>
    readonly responded_on: FieldRef<"group_joining_request_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * group_joining_request_details findUnique
   */
  export type group_joining_request_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_joining_request_details to fetch.
     */
    where: group_joining_request_detailsWhereUniqueInput
  }

  /**
   * group_joining_request_details findUniqueOrThrow
   */
  export type group_joining_request_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_joining_request_details to fetch.
     */
    where: group_joining_request_detailsWhereUniqueInput
  }

  /**
   * group_joining_request_details findFirst
   */
  export type group_joining_request_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_joining_request_details to fetch.
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_joining_request_details to fetch.
     */
    orderBy?: group_joining_request_detailsOrderByWithRelationInput | group_joining_request_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_joining_request_details.
     */
    cursor?: group_joining_request_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_joining_request_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_joining_request_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_joining_request_details.
     */
    distinct?: Group_joining_request_detailsScalarFieldEnum | Group_joining_request_detailsScalarFieldEnum[]
  }

  /**
   * group_joining_request_details findFirstOrThrow
   */
  export type group_joining_request_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_joining_request_details to fetch.
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_joining_request_details to fetch.
     */
    orderBy?: group_joining_request_detailsOrderByWithRelationInput | group_joining_request_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_joining_request_details.
     */
    cursor?: group_joining_request_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_joining_request_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_joining_request_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_joining_request_details.
     */
    distinct?: Group_joining_request_detailsScalarFieldEnum | Group_joining_request_detailsScalarFieldEnum[]
  }

  /**
   * group_joining_request_details findMany
   */
  export type group_joining_request_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * Filter, which group_joining_request_details to fetch.
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_joining_request_details to fetch.
     */
    orderBy?: group_joining_request_detailsOrderByWithRelationInput | group_joining_request_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_joining_request_details.
     */
    cursor?: group_joining_request_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_joining_request_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_joining_request_details.
     */
    skip?: number
    distinct?: Group_joining_request_detailsScalarFieldEnum | Group_joining_request_detailsScalarFieldEnum[]
  }

  /**
   * group_joining_request_details create
   */
  export type group_joining_request_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a group_joining_request_details.
     */
    data: XOR<group_joining_request_detailsCreateInput, group_joining_request_detailsUncheckedCreateInput>
  }

  /**
   * group_joining_request_details createMany
   */
  export type group_joining_request_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_joining_request_details.
     */
    data: group_joining_request_detailsCreateManyInput | group_joining_request_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_joining_request_details createManyAndReturn
   */
  export type group_joining_request_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many group_joining_request_details.
     */
    data: group_joining_request_detailsCreateManyInput | group_joining_request_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_joining_request_details update
   */
  export type group_joining_request_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a group_joining_request_details.
     */
    data: XOR<group_joining_request_detailsUpdateInput, group_joining_request_detailsUncheckedUpdateInput>
    /**
     * Choose, which group_joining_request_details to update.
     */
    where: group_joining_request_detailsWhereUniqueInput
  }

  /**
   * group_joining_request_details updateMany
   */
  export type group_joining_request_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_joining_request_details.
     */
    data: XOR<group_joining_request_detailsUpdateManyMutationInput, group_joining_request_detailsUncheckedUpdateManyInput>
    /**
     * Filter which group_joining_request_details to update
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * Limit how many group_joining_request_details to update.
     */
    limit?: number
  }

  /**
   * group_joining_request_details updateManyAndReturn
   */
  export type group_joining_request_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * The data used to update group_joining_request_details.
     */
    data: XOR<group_joining_request_detailsUpdateManyMutationInput, group_joining_request_detailsUncheckedUpdateManyInput>
    /**
     * Filter which group_joining_request_details to update
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * Limit how many group_joining_request_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_joining_request_details upsert
   */
  export type group_joining_request_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the group_joining_request_details to update in case it exists.
     */
    where: group_joining_request_detailsWhereUniqueInput
    /**
     * In case the group_joining_request_details found by the `where` argument doesn't exist, create a new group_joining_request_details with this data.
     */
    create: XOR<group_joining_request_detailsCreateInput, group_joining_request_detailsUncheckedCreateInput>
    /**
     * In case the group_joining_request_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_joining_request_detailsUpdateInput, group_joining_request_detailsUncheckedUpdateInput>
  }

  /**
   * group_joining_request_details delete
   */
  export type group_joining_request_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
    /**
     * Filter which group_joining_request_details to delete.
     */
    where: group_joining_request_detailsWhereUniqueInput
  }

  /**
   * group_joining_request_details deleteMany
   */
  export type group_joining_request_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_joining_request_details to delete
     */
    where?: group_joining_request_detailsWhereInput
    /**
     * Limit how many group_joining_request_details to delete.
     */
    limit?: number
  }

  /**
   * group_joining_request_details without action
   */
  export type group_joining_request_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_joining_request_details
     */
    select?: group_joining_request_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_joining_request_details
     */
    omit?: group_joining_request_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_joining_request_detailsInclude<ExtArgs> | null
  }


  /**
   * Model notice_board_details
   */

  export type AggregateNotice_board_details = {
    _count: Notice_board_detailsCountAggregateOutputType | null
    _min: Notice_board_detailsMinAggregateOutputType | null
    _max: Notice_board_detailsMaxAggregateOutputType | null
  }

  export type Notice_board_detailsMinAggregateOutputType = {
    id: string | null
    board_text: string | null
    group_id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Notice_board_detailsMaxAggregateOutputType = {
    id: string | null
    board_text: string | null
    group_id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Notice_board_detailsCountAggregateOutputType = {
    id: number
    board_text: number
    group_id: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Notice_board_detailsMinAggregateInputType = {
    id?: true
    board_text?: true
    group_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Notice_board_detailsMaxAggregateInputType = {
    id?: true
    board_text?: true
    group_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Notice_board_detailsCountAggregateInputType = {
    id?: true
    board_text?: true
    group_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Notice_board_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notice_board_details to aggregate.
     */
    where?: notice_board_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_board_details to fetch.
     */
    orderBy?: notice_board_detailsOrderByWithRelationInput | notice_board_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notice_board_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_board_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_board_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notice_board_details
    **/
    _count?: true | Notice_board_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Notice_board_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Notice_board_detailsMaxAggregateInputType
  }

  export type GetNotice_board_detailsAggregateType<T extends Notice_board_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice_board_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice_board_details[P]>
      : GetScalarType<T[P], AggregateNotice_board_details[P]>
  }




  export type notice_board_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notice_board_detailsWhereInput
    orderBy?: notice_board_detailsOrderByWithAggregationInput | notice_board_detailsOrderByWithAggregationInput[]
    by: Notice_board_detailsScalarFieldEnum[] | Notice_board_detailsScalarFieldEnum
    having?: notice_board_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Notice_board_detailsCountAggregateInputType | true
    _min?: Notice_board_detailsMinAggregateInputType
    _max?: Notice_board_detailsMaxAggregateInputType
  }

  export type Notice_board_detailsGroupByOutputType = {
    id: string
    board_text: string | null
    group_id: string
    user_id: string
    createdAt: Date
    updatedAt: Date
    _count: Notice_board_detailsCountAggregateOutputType | null
    _min: Notice_board_detailsMinAggregateOutputType | null
    _max: Notice_board_detailsMaxAggregateOutputType | null
  }

  type GetNotice_board_detailsGroupByPayload<T extends notice_board_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Notice_board_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Notice_board_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Notice_board_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Notice_board_detailsGroupByOutputType[P]>
        }
      >
    >


  export type notice_board_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_text?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    handled_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice_board_details"]>

  export type notice_board_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_text?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    handled_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice_board_details"]>

  export type notice_board_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_text?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    handled_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice_board_details"]>

  export type notice_board_detailsSelectScalar = {
    id?: boolean
    board_text?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type notice_board_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "board_text" | "group_id" | "user_id" | "createdAt" | "updatedAt", ExtArgs["result"]["notice_board_details"]>
  export type notice_board_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    handled_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type notice_board_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    handled_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type notice_board_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    handled_by?: boolean | user_detailsDefaultArgs<ExtArgs>
  }

  export type $notice_board_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notice_board_details"
    objects: {
      handled_by: Prisma.$user_detailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      board_text: string | null
      group_id: string
      user_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notice_board_details"]>
    composites: {}
  }

  type notice_board_detailsGetPayload<S extends boolean | null | undefined | notice_board_detailsDefaultArgs> = $Result.GetResult<Prisma.$notice_board_detailsPayload, S>

  type notice_board_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notice_board_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Notice_board_detailsCountAggregateInputType | true
    }

  export interface notice_board_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notice_board_details'], meta: { name: 'notice_board_details' } }
    /**
     * Find zero or one Notice_board_details that matches the filter.
     * @param {notice_board_detailsFindUniqueArgs} args - Arguments to find a Notice_board_details
     * @example
     * // Get one Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notice_board_detailsFindUniqueArgs>(args: SelectSubset<T, notice_board_detailsFindUniqueArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice_board_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notice_board_detailsFindUniqueOrThrowArgs} args - Arguments to find a Notice_board_details
     * @example
     * // Get one Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notice_board_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, notice_board_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice_board_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_board_detailsFindFirstArgs} args - Arguments to find a Notice_board_details
     * @example
     * // Get one Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notice_board_detailsFindFirstArgs>(args?: SelectSubset<T, notice_board_detailsFindFirstArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice_board_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_board_detailsFindFirstOrThrowArgs} args - Arguments to find a Notice_board_details
     * @example
     * // Get one Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notice_board_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, notice_board_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notice_board_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_board_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.findMany()
     * 
     * // Get first 10 Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notice_board_detailsWithIdOnly = await prisma.notice_board_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notice_board_detailsFindManyArgs>(args?: SelectSubset<T, notice_board_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice_board_details.
     * @param {notice_board_detailsCreateArgs} args - Arguments to create a Notice_board_details.
     * @example
     * // Create one Notice_board_details
     * const Notice_board_details = await prisma.notice_board_details.create({
     *   data: {
     *     // ... data to create a Notice_board_details
     *   }
     * })
     * 
     */
    create<T extends notice_board_detailsCreateArgs>(args: SelectSubset<T, notice_board_detailsCreateArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notice_board_details.
     * @param {notice_board_detailsCreateManyArgs} args - Arguments to create many Notice_board_details.
     * @example
     * // Create many Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notice_board_detailsCreateManyArgs>(args?: SelectSubset<T, notice_board_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notice_board_details and returns the data saved in the database.
     * @param {notice_board_detailsCreateManyAndReturnArgs} args - Arguments to create many Notice_board_details.
     * @example
     * // Create many Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notice_board_details and only return the `id`
     * const notice_board_detailsWithIdOnly = await prisma.notice_board_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notice_board_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, notice_board_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notice_board_details.
     * @param {notice_board_detailsDeleteArgs} args - Arguments to delete one Notice_board_details.
     * @example
     * // Delete one Notice_board_details
     * const Notice_board_details = await prisma.notice_board_details.delete({
     *   where: {
     *     // ... filter to delete one Notice_board_details
     *   }
     * })
     * 
     */
    delete<T extends notice_board_detailsDeleteArgs>(args: SelectSubset<T, notice_board_detailsDeleteArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice_board_details.
     * @param {notice_board_detailsUpdateArgs} args - Arguments to update one Notice_board_details.
     * @example
     * // Update one Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notice_board_detailsUpdateArgs>(args: SelectSubset<T, notice_board_detailsUpdateArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notice_board_details.
     * @param {notice_board_detailsDeleteManyArgs} args - Arguments to filter Notice_board_details to delete.
     * @example
     * // Delete a few Notice_board_details
     * const { count } = await prisma.notice_board_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notice_board_detailsDeleteManyArgs>(args?: SelectSubset<T, notice_board_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notice_board_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_board_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notice_board_detailsUpdateManyArgs>(args: SelectSubset<T, notice_board_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notice_board_details and returns the data updated in the database.
     * @param {notice_board_detailsUpdateManyAndReturnArgs} args - Arguments to update many Notice_board_details.
     * @example
     * // Update many Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notice_board_details and only return the `id`
     * const notice_board_detailsWithIdOnly = await prisma.notice_board_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notice_board_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, notice_board_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notice_board_details.
     * @param {notice_board_detailsUpsertArgs} args - Arguments to update or create a Notice_board_details.
     * @example
     * // Update or create a Notice_board_details
     * const notice_board_details = await prisma.notice_board_details.upsert({
     *   create: {
     *     // ... data to create a Notice_board_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice_board_details we want to update
     *   }
     * })
     */
    upsert<T extends notice_board_detailsUpsertArgs>(args: SelectSubset<T, notice_board_detailsUpsertArgs<ExtArgs>>): Prisma__notice_board_detailsClient<$Result.GetResult<Prisma.$notice_board_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notice_board_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_board_detailsCountArgs} args - Arguments to filter Notice_board_details to count.
     * @example
     * // Count the number of Notice_board_details
     * const count = await prisma.notice_board_details.count({
     *   where: {
     *     // ... the filter for the Notice_board_details we want to count
     *   }
     * })
    **/
    count<T extends notice_board_detailsCountArgs>(
      args?: Subset<T, notice_board_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Notice_board_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice_board_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notice_board_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Notice_board_detailsAggregateArgs>(args: Subset<T, Notice_board_detailsAggregateArgs>): Prisma.PrismaPromise<GetNotice_board_detailsAggregateType<T>>

    /**
     * Group by Notice_board_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notice_board_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notice_board_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notice_board_detailsGroupByArgs['orderBy'] }
        : { orderBy?: notice_board_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notice_board_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotice_board_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notice_board_details model
   */
  readonly fields: notice_board_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notice_board_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notice_board_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    handled_by<T extends user_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_detailsDefaultArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notice_board_details model
   */
  interface notice_board_detailsFieldRefs {
    readonly id: FieldRef<"notice_board_details", 'String'>
    readonly board_text: FieldRef<"notice_board_details", 'String'>
    readonly group_id: FieldRef<"notice_board_details", 'String'>
    readonly user_id: FieldRef<"notice_board_details", 'String'>
    readonly createdAt: FieldRef<"notice_board_details", 'DateTime'>
    readonly updatedAt: FieldRef<"notice_board_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notice_board_details findUnique
   */
  export type notice_board_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * Filter, which notice_board_details to fetch.
     */
    where: notice_board_detailsWhereUniqueInput
  }

  /**
   * notice_board_details findUniqueOrThrow
   */
  export type notice_board_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * Filter, which notice_board_details to fetch.
     */
    where: notice_board_detailsWhereUniqueInput
  }

  /**
   * notice_board_details findFirst
   */
  export type notice_board_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * Filter, which notice_board_details to fetch.
     */
    where?: notice_board_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_board_details to fetch.
     */
    orderBy?: notice_board_detailsOrderByWithRelationInput | notice_board_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notice_board_details.
     */
    cursor?: notice_board_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_board_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_board_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notice_board_details.
     */
    distinct?: Notice_board_detailsScalarFieldEnum | Notice_board_detailsScalarFieldEnum[]
  }

  /**
   * notice_board_details findFirstOrThrow
   */
  export type notice_board_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * Filter, which notice_board_details to fetch.
     */
    where?: notice_board_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_board_details to fetch.
     */
    orderBy?: notice_board_detailsOrderByWithRelationInput | notice_board_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notice_board_details.
     */
    cursor?: notice_board_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_board_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_board_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notice_board_details.
     */
    distinct?: Notice_board_detailsScalarFieldEnum | Notice_board_detailsScalarFieldEnum[]
  }

  /**
   * notice_board_details findMany
   */
  export type notice_board_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * Filter, which notice_board_details to fetch.
     */
    where?: notice_board_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notice_board_details to fetch.
     */
    orderBy?: notice_board_detailsOrderByWithRelationInput | notice_board_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notice_board_details.
     */
    cursor?: notice_board_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notice_board_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notice_board_details.
     */
    skip?: number
    distinct?: Notice_board_detailsScalarFieldEnum | Notice_board_detailsScalarFieldEnum[]
  }

  /**
   * notice_board_details create
   */
  export type notice_board_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a notice_board_details.
     */
    data: XOR<notice_board_detailsCreateInput, notice_board_detailsUncheckedCreateInput>
  }

  /**
   * notice_board_details createMany
   */
  export type notice_board_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notice_board_details.
     */
    data: notice_board_detailsCreateManyInput | notice_board_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notice_board_details createManyAndReturn
   */
  export type notice_board_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many notice_board_details.
     */
    data: notice_board_detailsCreateManyInput | notice_board_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notice_board_details update
   */
  export type notice_board_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a notice_board_details.
     */
    data: XOR<notice_board_detailsUpdateInput, notice_board_detailsUncheckedUpdateInput>
    /**
     * Choose, which notice_board_details to update.
     */
    where: notice_board_detailsWhereUniqueInput
  }

  /**
   * notice_board_details updateMany
   */
  export type notice_board_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notice_board_details.
     */
    data: XOR<notice_board_detailsUpdateManyMutationInput, notice_board_detailsUncheckedUpdateManyInput>
    /**
     * Filter which notice_board_details to update
     */
    where?: notice_board_detailsWhereInput
    /**
     * Limit how many notice_board_details to update.
     */
    limit?: number
  }

  /**
   * notice_board_details updateManyAndReturn
   */
  export type notice_board_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * The data used to update notice_board_details.
     */
    data: XOR<notice_board_detailsUpdateManyMutationInput, notice_board_detailsUncheckedUpdateManyInput>
    /**
     * Filter which notice_board_details to update
     */
    where?: notice_board_detailsWhereInput
    /**
     * Limit how many notice_board_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notice_board_details upsert
   */
  export type notice_board_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the notice_board_details to update in case it exists.
     */
    where: notice_board_detailsWhereUniqueInput
    /**
     * In case the notice_board_details found by the `where` argument doesn't exist, create a new notice_board_details with this data.
     */
    create: XOR<notice_board_detailsCreateInput, notice_board_detailsUncheckedCreateInput>
    /**
     * In case the notice_board_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notice_board_detailsUpdateInput, notice_board_detailsUncheckedUpdateInput>
  }

  /**
   * notice_board_details delete
   */
  export type notice_board_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
    /**
     * Filter which notice_board_details to delete.
     */
    where: notice_board_detailsWhereUniqueInput
  }

  /**
   * notice_board_details deleteMany
   */
  export type notice_board_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notice_board_details to delete
     */
    where?: notice_board_detailsWhereInput
    /**
     * Limit how many notice_board_details to delete.
     */
    limit?: number
  }

  /**
   * notice_board_details without action
   */
  export type notice_board_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notice_board_details
     */
    select?: notice_board_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notice_board_details
     */
    omit?: notice_board_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notice_board_detailsInclude<ExtArgs> | null
  }


  /**
   * Model user_group_mapping
   */

  export type AggregateUser_group_mapping = {
    _count: User_group_mappingCountAggregateOutputType | null
    _min: User_group_mappingMinAggregateOutputType | null
    _max: User_group_mappingMaxAggregateOutputType | null
  }

  export type User_group_mappingMinAggregateOutputType = {
    id: string | null
    group_id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    joining_date: Date | null
    leaving_date: Date | null
    leaving_reason: string | null
    removed_reason: string | null
    removed_date: Date | null
    is_active_member: boolean | null
  }

  export type User_group_mappingMaxAggregateOutputType = {
    id: string | null
    group_id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    joining_date: Date | null
    leaving_date: Date | null
    leaving_reason: string | null
    removed_reason: string | null
    removed_date: Date | null
    is_active_member: boolean | null
  }

  export type User_group_mappingCountAggregateOutputType = {
    id: number
    group_id: number
    user_id: number
    createdAt: number
    updatedAt: number
    joining_date: number
    leaving_date: number
    leaving_reason: number
    removed_reason: number
    removed_date: number
    is_active_member: number
    _all: number
  }


  export type User_group_mappingMinAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    joining_date?: true
    leaving_date?: true
    leaving_reason?: true
    removed_reason?: true
    removed_date?: true
    is_active_member?: true
  }

  export type User_group_mappingMaxAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    joining_date?: true
    leaving_date?: true
    leaving_reason?: true
    removed_reason?: true
    removed_date?: true
    is_active_member?: true
  }

  export type User_group_mappingCountAggregateInputType = {
    id?: true
    group_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    joining_date?: true
    leaving_date?: true
    leaving_reason?: true
    removed_reason?: true
    removed_date?: true
    is_active_member?: true
    _all?: true
  }

  export type User_group_mappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_group_mapping to aggregate.
     */
    where?: user_group_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_group_mappings to fetch.
     */
    orderBy?: user_group_mappingOrderByWithRelationInput | user_group_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_group_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_group_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_group_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_group_mappings
    **/
    _count?: true | User_group_mappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_group_mappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_group_mappingMaxAggregateInputType
  }

  export type GetUser_group_mappingAggregateType<T extends User_group_mappingAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_group_mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_group_mapping[P]>
      : GetScalarType<T[P], AggregateUser_group_mapping[P]>
  }




  export type user_group_mappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_group_mappingWhereInput
    orderBy?: user_group_mappingOrderByWithAggregationInput | user_group_mappingOrderByWithAggregationInput[]
    by: User_group_mappingScalarFieldEnum[] | User_group_mappingScalarFieldEnum
    having?: user_group_mappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_group_mappingCountAggregateInputType | true
    _min?: User_group_mappingMinAggregateInputType
    _max?: User_group_mappingMaxAggregateInputType
  }

  export type User_group_mappingGroupByOutputType = {
    id: string
    group_id: string
    user_id: string
    createdAt: Date
    updatedAt: Date
    joining_date: Date | null
    leaving_date: Date | null
    leaving_reason: string | null
    removed_reason: string | null
    removed_date: Date | null
    is_active_member: boolean | null
    _count: User_group_mappingCountAggregateOutputType | null
    _min: User_group_mappingMinAggregateOutputType | null
    _max: User_group_mappingMaxAggregateOutputType | null
  }

  type GetUser_group_mappingGroupByPayload<T extends user_group_mappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_group_mappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_group_mappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_group_mappingGroupByOutputType[P]>
            : GetScalarType<T[P], User_group_mappingGroupByOutputType[P]>
        }
      >
    >


  export type user_group_mappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    joining_date?: boolean
    leaving_date?: boolean
    leaving_reason?: boolean
    removed_reason?: boolean
    removed_date?: boolean
    is_active_member?: boolean
    group_details?: boolean | group_detailsDefaultArgs<ExtArgs>
    user_details?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_group_mapping"]>

  export type user_group_mappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    joining_date?: boolean
    leaving_date?: boolean
    leaving_reason?: boolean
    removed_reason?: boolean
    removed_date?: boolean
    is_active_member?: boolean
    group_details?: boolean | group_detailsDefaultArgs<ExtArgs>
    user_details?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_group_mapping"]>

  export type user_group_mappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    joining_date?: boolean
    leaving_date?: boolean
    leaving_reason?: boolean
    removed_reason?: boolean
    removed_date?: boolean
    is_active_member?: boolean
    group_details?: boolean | group_detailsDefaultArgs<ExtArgs>
    user_details?: boolean | user_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_group_mapping"]>

  export type user_group_mappingSelectScalar = {
    id?: boolean
    group_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    joining_date?: boolean
    leaving_date?: boolean
    leaving_reason?: boolean
    removed_reason?: boolean
    removed_date?: boolean
    is_active_member?: boolean
  }

  export type user_group_mappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "user_id" | "createdAt" | "updatedAt" | "joining_date" | "leaving_date" | "leaving_reason" | "removed_reason" | "removed_date" | "is_active_member", ExtArgs["result"]["user_group_mapping"]>
  export type user_group_mappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_details?: boolean | group_detailsDefaultArgs<ExtArgs>
    user_details?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type user_group_mappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_details?: boolean | group_detailsDefaultArgs<ExtArgs>
    user_details?: boolean | user_detailsDefaultArgs<ExtArgs>
  }
  export type user_group_mappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_details?: boolean | group_detailsDefaultArgs<ExtArgs>
    user_details?: boolean | user_detailsDefaultArgs<ExtArgs>
  }

  export type $user_group_mappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_group_mapping"
    objects: {
      group_details: Prisma.$group_detailsPayload<ExtArgs>
      user_details: Prisma.$user_detailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_id: string
      user_id: string
      createdAt: Date
      updatedAt: Date
      joining_date: Date | null
      leaving_date: Date | null
      leaving_reason: string | null
      removed_reason: string | null
      removed_date: Date | null
      is_active_member: boolean | null
    }, ExtArgs["result"]["user_group_mapping"]>
    composites: {}
  }

  type user_group_mappingGetPayload<S extends boolean | null | undefined | user_group_mappingDefaultArgs> = $Result.GetResult<Prisma.$user_group_mappingPayload, S>

  type user_group_mappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_group_mappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_group_mappingCountAggregateInputType | true
    }

  export interface user_group_mappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_group_mapping'], meta: { name: 'user_group_mapping' } }
    /**
     * Find zero or one User_group_mapping that matches the filter.
     * @param {user_group_mappingFindUniqueArgs} args - Arguments to find a User_group_mapping
     * @example
     * // Get one User_group_mapping
     * const user_group_mapping = await prisma.user_group_mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_group_mappingFindUniqueArgs>(args: SelectSubset<T, user_group_mappingFindUniqueArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_group_mapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_group_mappingFindUniqueOrThrowArgs} args - Arguments to find a User_group_mapping
     * @example
     * // Get one User_group_mapping
     * const user_group_mapping = await prisma.user_group_mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_group_mappingFindUniqueOrThrowArgs>(args: SelectSubset<T, user_group_mappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_group_mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_group_mappingFindFirstArgs} args - Arguments to find a User_group_mapping
     * @example
     * // Get one User_group_mapping
     * const user_group_mapping = await prisma.user_group_mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_group_mappingFindFirstArgs>(args?: SelectSubset<T, user_group_mappingFindFirstArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_group_mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_group_mappingFindFirstOrThrowArgs} args - Arguments to find a User_group_mapping
     * @example
     * // Get one User_group_mapping
     * const user_group_mapping = await prisma.user_group_mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_group_mappingFindFirstOrThrowArgs>(args?: SelectSubset<T, user_group_mappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_group_mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_group_mappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_group_mappings
     * const user_group_mappings = await prisma.user_group_mapping.findMany()
     * 
     * // Get first 10 User_group_mappings
     * const user_group_mappings = await prisma.user_group_mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_group_mappingWithIdOnly = await prisma.user_group_mapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_group_mappingFindManyArgs>(args?: SelectSubset<T, user_group_mappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_group_mapping.
     * @param {user_group_mappingCreateArgs} args - Arguments to create a User_group_mapping.
     * @example
     * // Create one User_group_mapping
     * const User_group_mapping = await prisma.user_group_mapping.create({
     *   data: {
     *     // ... data to create a User_group_mapping
     *   }
     * })
     * 
     */
    create<T extends user_group_mappingCreateArgs>(args: SelectSubset<T, user_group_mappingCreateArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_group_mappings.
     * @param {user_group_mappingCreateManyArgs} args - Arguments to create many User_group_mappings.
     * @example
     * // Create many User_group_mappings
     * const user_group_mapping = await prisma.user_group_mapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_group_mappingCreateManyArgs>(args?: SelectSubset<T, user_group_mappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_group_mappings and returns the data saved in the database.
     * @param {user_group_mappingCreateManyAndReturnArgs} args - Arguments to create many User_group_mappings.
     * @example
     * // Create many User_group_mappings
     * const user_group_mapping = await prisma.user_group_mapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_group_mappings and only return the `id`
     * const user_group_mappingWithIdOnly = await prisma.user_group_mapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_group_mappingCreateManyAndReturnArgs>(args?: SelectSubset<T, user_group_mappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_group_mapping.
     * @param {user_group_mappingDeleteArgs} args - Arguments to delete one User_group_mapping.
     * @example
     * // Delete one User_group_mapping
     * const User_group_mapping = await prisma.user_group_mapping.delete({
     *   where: {
     *     // ... filter to delete one User_group_mapping
     *   }
     * })
     * 
     */
    delete<T extends user_group_mappingDeleteArgs>(args: SelectSubset<T, user_group_mappingDeleteArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_group_mapping.
     * @param {user_group_mappingUpdateArgs} args - Arguments to update one User_group_mapping.
     * @example
     * // Update one User_group_mapping
     * const user_group_mapping = await prisma.user_group_mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_group_mappingUpdateArgs>(args: SelectSubset<T, user_group_mappingUpdateArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_group_mappings.
     * @param {user_group_mappingDeleteManyArgs} args - Arguments to filter User_group_mappings to delete.
     * @example
     * // Delete a few User_group_mappings
     * const { count } = await prisma.user_group_mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_group_mappingDeleteManyArgs>(args?: SelectSubset<T, user_group_mappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_group_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_group_mappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_group_mappings
     * const user_group_mapping = await prisma.user_group_mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_group_mappingUpdateManyArgs>(args: SelectSubset<T, user_group_mappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_group_mappings and returns the data updated in the database.
     * @param {user_group_mappingUpdateManyAndReturnArgs} args - Arguments to update many User_group_mappings.
     * @example
     * // Update many User_group_mappings
     * const user_group_mapping = await prisma.user_group_mapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_group_mappings and only return the `id`
     * const user_group_mappingWithIdOnly = await prisma.user_group_mapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_group_mappingUpdateManyAndReturnArgs>(args: SelectSubset<T, user_group_mappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_group_mapping.
     * @param {user_group_mappingUpsertArgs} args - Arguments to update or create a User_group_mapping.
     * @example
     * // Update or create a User_group_mapping
     * const user_group_mapping = await prisma.user_group_mapping.upsert({
     *   create: {
     *     // ... data to create a User_group_mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_group_mapping we want to update
     *   }
     * })
     */
    upsert<T extends user_group_mappingUpsertArgs>(args: SelectSubset<T, user_group_mappingUpsertArgs<ExtArgs>>): Prisma__user_group_mappingClient<$Result.GetResult<Prisma.$user_group_mappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_group_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_group_mappingCountArgs} args - Arguments to filter User_group_mappings to count.
     * @example
     * // Count the number of User_group_mappings
     * const count = await prisma.user_group_mapping.count({
     *   where: {
     *     // ... the filter for the User_group_mappings we want to count
     *   }
     * })
    **/
    count<T extends user_group_mappingCountArgs>(
      args?: Subset<T, user_group_mappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_group_mappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_group_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_group_mappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_group_mappingAggregateArgs>(args: Subset<T, User_group_mappingAggregateArgs>): Prisma.PrismaPromise<GetUser_group_mappingAggregateType<T>>

    /**
     * Group by User_group_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_group_mappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_group_mappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_group_mappingGroupByArgs['orderBy'] }
        : { orderBy?: user_group_mappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_group_mappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_group_mappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_group_mapping model
   */
  readonly fields: user_group_mappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_group_mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_group_mappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group_details<T extends group_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, group_detailsDefaultArgs<ExtArgs>>): Prisma__group_detailsClient<$Result.GetResult<Prisma.$group_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_details<T extends user_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_detailsDefaultArgs<ExtArgs>>): Prisma__user_detailsClient<$Result.GetResult<Prisma.$user_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_group_mapping model
   */
  interface user_group_mappingFieldRefs {
    readonly id: FieldRef<"user_group_mapping", 'String'>
    readonly group_id: FieldRef<"user_group_mapping", 'String'>
    readonly user_id: FieldRef<"user_group_mapping", 'String'>
    readonly createdAt: FieldRef<"user_group_mapping", 'DateTime'>
    readonly updatedAt: FieldRef<"user_group_mapping", 'DateTime'>
    readonly joining_date: FieldRef<"user_group_mapping", 'DateTime'>
    readonly leaving_date: FieldRef<"user_group_mapping", 'DateTime'>
    readonly leaving_reason: FieldRef<"user_group_mapping", 'String'>
    readonly removed_reason: FieldRef<"user_group_mapping", 'String'>
    readonly removed_date: FieldRef<"user_group_mapping", 'DateTime'>
    readonly is_active_member: FieldRef<"user_group_mapping", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user_group_mapping findUnique
   */
  export type user_group_mappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_group_mapping to fetch.
     */
    where: user_group_mappingWhereUniqueInput
  }

  /**
   * user_group_mapping findUniqueOrThrow
   */
  export type user_group_mappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_group_mapping to fetch.
     */
    where: user_group_mappingWhereUniqueInput
  }

  /**
   * user_group_mapping findFirst
   */
  export type user_group_mappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_group_mapping to fetch.
     */
    where?: user_group_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_group_mappings to fetch.
     */
    orderBy?: user_group_mappingOrderByWithRelationInput | user_group_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_group_mappings.
     */
    cursor?: user_group_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_group_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_group_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_group_mappings.
     */
    distinct?: User_group_mappingScalarFieldEnum | User_group_mappingScalarFieldEnum[]
  }

  /**
   * user_group_mapping findFirstOrThrow
   */
  export type user_group_mappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_group_mapping to fetch.
     */
    where?: user_group_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_group_mappings to fetch.
     */
    orderBy?: user_group_mappingOrderByWithRelationInput | user_group_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_group_mappings.
     */
    cursor?: user_group_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_group_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_group_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_group_mappings.
     */
    distinct?: User_group_mappingScalarFieldEnum | User_group_mappingScalarFieldEnum[]
  }

  /**
   * user_group_mapping findMany
   */
  export type user_group_mappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * Filter, which user_group_mappings to fetch.
     */
    where?: user_group_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_group_mappings to fetch.
     */
    orderBy?: user_group_mappingOrderByWithRelationInput | user_group_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_group_mappings.
     */
    cursor?: user_group_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_group_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_group_mappings.
     */
    skip?: number
    distinct?: User_group_mappingScalarFieldEnum | User_group_mappingScalarFieldEnum[]
  }

  /**
   * user_group_mapping create
   */
  export type user_group_mappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * The data needed to create a user_group_mapping.
     */
    data: XOR<user_group_mappingCreateInput, user_group_mappingUncheckedCreateInput>
  }

  /**
   * user_group_mapping createMany
   */
  export type user_group_mappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_group_mappings.
     */
    data: user_group_mappingCreateManyInput | user_group_mappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_group_mapping createManyAndReturn
   */
  export type user_group_mappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * The data used to create many user_group_mappings.
     */
    data: user_group_mappingCreateManyInput | user_group_mappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_group_mapping update
   */
  export type user_group_mappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * The data needed to update a user_group_mapping.
     */
    data: XOR<user_group_mappingUpdateInput, user_group_mappingUncheckedUpdateInput>
    /**
     * Choose, which user_group_mapping to update.
     */
    where: user_group_mappingWhereUniqueInput
  }

  /**
   * user_group_mapping updateMany
   */
  export type user_group_mappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_group_mappings.
     */
    data: XOR<user_group_mappingUpdateManyMutationInput, user_group_mappingUncheckedUpdateManyInput>
    /**
     * Filter which user_group_mappings to update
     */
    where?: user_group_mappingWhereInput
    /**
     * Limit how many user_group_mappings to update.
     */
    limit?: number
  }

  /**
   * user_group_mapping updateManyAndReturn
   */
  export type user_group_mappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * The data used to update user_group_mappings.
     */
    data: XOR<user_group_mappingUpdateManyMutationInput, user_group_mappingUncheckedUpdateManyInput>
    /**
     * Filter which user_group_mappings to update
     */
    where?: user_group_mappingWhereInput
    /**
     * Limit how many user_group_mappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_group_mapping upsert
   */
  export type user_group_mappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * The filter to search for the user_group_mapping to update in case it exists.
     */
    where: user_group_mappingWhereUniqueInput
    /**
     * In case the user_group_mapping found by the `where` argument doesn't exist, create a new user_group_mapping with this data.
     */
    create: XOR<user_group_mappingCreateInput, user_group_mappingUncheckedCreateInput>
    /**
     * In case the user_group_mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_group_mappingUpdateInput, user_group_mappingUncheckedUpdateInput>
  }

  /**
   * user_group_mapping delete
   */
  export type user_group_mappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
    /**
     * Filter which user_group_mapping to delete.
     */
    where: user_group_mappingWhereUniqueInput
  }

  /**
   * user_group_mapping deleteMany
   */
  export type user_group_mappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_group_mappings to delete
     */
    where?: user_group_mappingWhereInput
    /**
     * Limit how many user_group_mappings to delete.
     */
    limit?: number
  }

  /**
   * user_group_mapping without action
   */
  export type user_group_mappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_group_mapping
     */
    select?: user_group_mappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_group_mapping
     */
    omit?: user_group_mappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_group_mappingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_detailsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    frist_name: 'frist_name',
    last_name: 'last_name',
    refreshToken: 'refreshToken',
    role: 'role',
    github_link: 'github_link',
    hashnode_link: 'hashnode_link',
    peerlist_link: 'peerlist_link',
    tweeter_link: 'tweeter_link'
  };

  export type User_detailsScalarFieldEnum = (typeof User_detailsScalarFieldEnum)[keyof typeof User_detailsScalarFieldEnum]


  export const Group_detailsScalarFieldEnum: {
    id: 'id',
    group_name: 'group_name',
    group_desc: 'group_desc',
    is_published: 'is_published',
    admin_id: 'admin_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Group_detailsScalarFieldEnum = (typeof Group_detailsScalarFieldEnum)[keyof typeof Group_detailsScalarFieldEnum]


  export const User_cohort_mappingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    cohort_id: 'cohort_id'
  };

  export type User_cohort_mappingScalarFieldEnum = (typeof User_cohort_mappingScalarFieldEnum)[keyof typeof User_cohort_mappingScalarFieldEnum]


  export const Cohort_detailsScalarFieldEnum: {
    id: 'id',
    cohort_name: 'cohort_name'
  };

  export type Cohort_detailsScalarFieldEnum = (typeof Cohort_detailsScalarFieldEnum)[keyof typeof Cohort_detailsScalarFieldEnum]


  export const Group_joining_request_detailsScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    user_id: 'user_id',
    request_note_by_user: 'request_note_by_user',
    rejection_remark: 'rejection_remark',
    requested_on: 'requested_on',
    responded_on: 'responded_on'
  };

  export type Group_joining_request_detailsScalarFieldEnum = (typeof Group_joining_request_detailsScalarFieldEnum)[keyof typeof Group_joining_request_detailsScalarFieldEnum]


  export const Notice_board_detailsScalarFieldEnum: {
    id: 'id',
    board_text: 'board_text',
    group_id: 'group_id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Notice_board_detailsScalarFieldEnum = (typeof Notice_board_detailsScalarFieldEnum)[keyof typeof Notice_board_detailsScalarFieldEnum]


  export const User_group_mappingScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    joining_date: 'joining_date',
    leaving_date: 'leaving_date',
    leaving_reason: 'leaving_reason',
    removed_reason: 'removed_reason',
    removed_date: 'removed_date',
    is_active_member: 'is_active_member'
  };

  export type User_group_mappingScalarFieldEnum = (typeof User_group_mappingScalarFieldEnum)[keyof typeof User_group_mappingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type user_detailsWhereInput = {
    AND?: user_detailsWhereInput | user_detailsWhereInput[]
    OR?: user_detailsWhereInput[]
    NOT?: user_detailsWhereInput | user_detailsWhereInput[]
    id?: StringFilter<"user_details"> | string
    email?: StringFilter<"user_details"> | string
    password?: StringFilter<"user_details"> | string
    frist_name?: StringFilter<"user_details"> | string
    last_name?: StringFilter<"user_details"> | string
    refreshToken?: StringNullableFilter<"user_details"> | string | null
    role?: EnumROLEFilter<"user_details"> | $Enums.ROLE
    github_link?: StringFilter<"user_details"> | string
    hashnode_link?: StringFilter<"user_details"> | string
    peerlist_link?: StringFilter<"user_details"> | string
    tweeter_link?: StringFilter<"user_details"> | string
    group_details?: Group_detailsListRelationFilter
    group_joining_request_details?: Group_joining_request_detailsListRelationFilter
    notice_board_details?: Notice_board_detailsListRelationFilter
    user_cohort_mapping?: User_cohort_mappingListRelationFilter
    user_group_mapping?: User_group_mappingListRelationFilter
  }

  export type user_detailsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frist_name?: SortOrder
    last_name?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    role?: SortOrder
    github_link?: SortOrder
    hashnode_link?: SortOrder
    peerlist_link?: SortOrder
    tweeter_link?: SortOrder
    group_details?: group_detailsOrderByRelationAggregateInput
    group_joining_request_details?: group_joining_request_detailsOrderByRelationAggregateInput
    notice_board_details?: notice_board_detailsOrderByRelationAggregateInput
    user_cohort_mapping?: user_cohort_mappingOrderByRelationAggregateInput
    user_group_mapping?: user_group_mappingOrderByRelationAggregateInput
  }

  export type user_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: user_detailsWhereInput | user_detailsWhereInput[]
    OR?: user_detailsWhereInput[]
    NOT?: user_detailsWhereInput | user_detailsWhereInput[]
    password?: StringFilter<"user_details"> | string
    frist_name?: StringFilter<"user_details"> | string
    last_name?: StringFilter<"user_details"> | string
    refreshToken?: StringNullableFilter<"user_details"> | string | null
    role?: EnumROLEFilter<"user_details"> | $Enums.ROLE
    github_link?: StringFilter<"user_details"> | string
    hashnode_link?: StringFilter<"user_details"> | string
    peerlist_link?: StringFilter<"user_details"> | string
    tweeter_link?: StringFilter<"user_details"> | string
    group_details?: Group_detailsListRelationFilter
    group_joining_request_details?: Group_joining_request_detailsListRelationFilter
    notice_board_details?: Notice_board_detailsListRelationFilter
    user_cohort_mapping?: User_cohort_mappingListRelationFilter
    user_group_mapping?: User_group_mappingListRelationFilter
  }, "id" | "email">

  export type user_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frist_name?: SortOrder
    last_name?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    role?: SortOrder
    github_link?: SortOrder
    hashnode_link?: SortOrder
    peerlist_link?: SortOrder
    tweeter_link?: SortOrder
    _count?: user_detailsCountOrderByAggregateInput
    _max?: user_detailsMaxOrderByAggregateInput
    _min?: user_detailsMinOrderByAggregateInput
  }

  export type user_detailsScalarWhereWithAggregatesInput = {
    AND?: user_detailsScalarWhereWithAggregatesInput | user_detailsScalarWhereWithAggregatesInput[]
    OR?: user_detailsScalarWhereWithAggregatesInput[]
    NOT?: user_detailsScalarWhereWithAggregatesInput | user_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_details"> | string
    email?: StringWithAggregatesFilter<"user_details"> | string
    password?: StringWithAggregatesFilter<"user_details"> | string
    frist_name?: StringWithAggregatesFilter<"user_details"> | string
    last_name?: StringWithAggregatesFilter<"user_details"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"user_details"> | string | null
    role?: EnumROLEWithAggregatesFilter<"user_details"> | $Enums.ROLE
    github_link?: StringWithAggregatesFilter<"user_details"> | string
    hashnode_link?: StringWithAggregatesFilter<"user_details"> | string
    peerlist_link?: StringWithAggregatesFilter<"user_details"> | string
    tweeter_link?: StringWithAggregatesFilter<"user_details"> | string
  }

  export type group_detailsWhereInput = {
    AND?: group_detailsWhereInput | group_detailsWhereInput[]
    OR?: group_detailsWhereInput[]
    NOT?: group_detailsWhereInput | group_detailsWhereInput[]
    id?: StringFilter<"group_details"> | string
    group_name?: StringFilter<"group_details"> | string
    group_desc?: StringFilter<"group_details"> | string
    is_published?: BoolFilter<"group_details"> | boolean
    admin_id?: StringFilter<"group_details"> | string
    createdAt?: DateTimeFilter<"group_details"> | Date | string
    updatedAt?: DateTimeFilter<"group_details"> | Date | string
    created_by?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
    group_joining_request_details?: Group_joining_request_detailsListRelationFilter
    user_group_mapping?: User_group_mappingListRelationFilter
  }

  export type group_detailsOrderByWithRelationInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_desc?: SortOrder
    is_published?: SortOrder
    admin_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: user_detailsOrderByWithRelationInput
    group_joining_request_details?: group_joining_request_detailsOrderByRelationAggregateInput
    user_group_mapping?: user_group_mappingOrderByRelationAggregateInput
  }

  export type group_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: group_detailsWhereInput | group_detailsWhereInput[]
    OR?: group_detailsWhereInput[]
    NOT?: group_detailsWhereInput | group_detailsWhereInput[]
    group_name?: StringFilter<"group_details"> | string
    group_desc?: StringFilter<"group_details"> | string
    is_published?: BoolFilter<"group_details"> | boolean
    admin_id?: StringFilter<"group_details"> | string
    createdAt?: DateTimeFilter<"group_details"> | Date | string
    updatedAt?: DateTimeFilter<"group_details"> | Date | string
    created_by?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
    group_joining_request_details?: Group_joining_request_detailsListRelationFilter
    user_group_mapping?: User_group_mappingListRelationFilter
  }, "id">

  export type group_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_desc?: SortOrder
    is_published?: SortOrder
    admin_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: group_detailsCountOrderByAggregateInput
    _max?: group_detailsMaxOrderByAggregateInput
    _min?: group_detailsMinOrderByAggregateInput
  }

  export type group_detailsScalarWhereWithAggregatesInput = {
    AND?: group_detailsScalarWhereWithAggregatesInput | group_detailsScalarWhereWithAggregatesInput[]
    OR?: group_detailsScalarWhereWithAggregatesInput[]
    NOT?: group_detailsScalarWhereWithAggregatesInput | group_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"group_details"> | string
    group_name?: StringWithAggregatesFilter<"group_details"> | string
    group_desc?: StringWithAggregatesFilter<"group_details"> | string
    is_published?: BoolWithAggregatesFilter<"group_details"> | boolean
    admin_id?: StringWithAggregatesFilter<"group_details"> | string
    createdAt?: DateTimeWithAggregatesFilter<"group_details"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"group_details"> | Date | string
  }

  export type user_cohort_mappingWhereInput = {
    AND?: user_cohort_mappingWhereInput | user_cohort_mappingWhereInput[]
    OR?: user_cohort_mappingWhereInput[]
    NOT?: user_cohort_mappingWhereInput | user_cohort_mappingWhereInput[]
    id?: StringFilter<"user_cohort_mapping"> | string
    user_id?: StringFilter<"user_cohort_mapping"> | string
    cohort_id?: StringFilter<"user_cohort_mapping"> | string
    cohort?: XOR<Cohort_detailsScalarRelationFilter, cohort_detailsWhereInput>
    user?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }

  export type user_cohort_mappingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    cohort_id?: SortOrder
    cohort?: cohort_detailsOrderByWithRelationInput
    user?: user_detailsOrderByWithRelationInput
  }

  export type user_cohort_mappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_cohort_mappingWhereInput | user_cohort_mappingWhereInput[]
    OR?: user_cohort_mappingWhereInput[]
    NOT?: user_cohort_mappingWhereInput | user_cohort_mappingWhereInput[]
    user_id?: StringFilter<"user_cohort_mapping"> | string
    cohort_id?: StringFilter<"user_cohort_mapping"> | string
    cohort?: XOR<Cohort_detailsScalarRelationFilter, cohort_detailsWhereInput>
    user?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }, "id">

  export type user_cohort_mappingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    cohort_id?: SortOrder
    _count?: user_cohort_mappingCountOrderByAggregateInput
    _max?: user_cohort_mappingMaxOrderByAggregateInput
    _min?: user_cohort_mappingMinOrderByAggregateInput
  }

  export type user_cohort_mappingScalarWhereWithAggregatesInput = {
    AND?: user_cohort_mappingScalarWhereWithAggregatesInput | user_cohort_mappingScalarWhereWithAggregatesInput[]
    OR?: user_cohort_mappingScalarWhereWithAggregatesInput[]
    NOT?: user_cohort_mappingScalarWhereWithAggregatesInput | user_cohort_mappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_cohort_mapping"> | string
    user_id?: StringWithAggregatesFilter<"user_cohort_mapping"> | string
    cohort_id?: StringWithAggregatesFilter<"user_cohort_mapping"> | string
  }

  export type cohort_detailsWhereInput = {
    AND?: cohort_detailsWhereInput | cohort_detailsWhereInput[]
    OR?: cohort_detailsWhereInput[]
    NOT?: cohort_detailsWhereInput | cohort_detailsWhereInput[]
    id?: StringFilter<"cohort_details"> | string
    cohort_name?: StringFilter<"cohort_details"> | string
    userCohorts?: User_cohort_mappingListRelationFilter
  }

  export type cohort_detailsOrderByWithRelationInput = {
    id?: SortOrder
    cohort_name?: SortOrder
    userCohorts?: user_cohort_mappingOrderByRelationAggregateInput
  }

  export type cohort_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cohort_name?: string
    AND?: cohort_detailsWhereInput | cohort_detailsWhereInput[]
    OR?: cohort_detailsWhereInput[]
    NOT?: cohort_detailsWhereInput | cohort_detailsWhereInput[]
    userCohorts?: User_cohort_mappingListRelationFilter
  }, "id" | "cohort_name">

  export type cohort_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    cohort_name?: SortOrder
    _count?: cohort_detailsCountOrderByAggregateInput
    _max?: cohort_detailsMaxOrderByAggregateInput
    _min?: cohort_detailsMinOrderByAggregateInput
  }

  export type cohort_detailsScalarWhereWithAggregatesInput = {
    AND?: cohort_detailsScalarWhereWithAggregatesInput | cohort_detailsScalarWhereWithAggregatesInput[]
    OR?: cohort_detailsScalarWhereWithAggregatesInput[]
    NOT?: cohort_detailsScalarWhereWithAggregatesInput | cohort_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cohort_details"> | string
    cohort_name?: StringWithAggregatesFilter<"cohort_details"> | string
  }

  export type group_joining_request_detailsWhereInput = {
    AND?: group_joining_request_detailsWhereInput | group_joining_request_detailsWhereInput[]
    OR?: group_joining_request_detailsWhereInput[]
    NOT?: group_joining_request_detailsWhereInput | group_joining_request_detailsWhereInput[]
    id?: StringFilter<"group_joining_request_details"> | string
    group_id?: StringFilter<"group_joining_request_details"> | string
    user_id?: StringFilter<"group_joining_request_details"> | string
    request_note_by_user?: StringNullableFilter<"group_joining_request_details"> | string | null
    rejection_remark?: StringNullableFilter<"group_joining_request_details"> | string | null
    requested_on?: DateTimeNullableFilter<"group_joining_request_details"> | Date | string | null
    responded_on?: DateTimeNullableFilter<"group_joining_request_details"> | Date | string | null
    group?: XOR<Group_detailsScalarRelationFilter, group_detailsWhereInput>
    user?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }

  export type group_joining_request_detailsOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    request_note_by_user?: SortOrderInput | SortOrder
    rejection_remark?: SortOrderInput | SortOrder
    requested_on?: SortOrderInput | SortOrder
    responded_on?: SortOrderInput | SortOrder
    group?: group_detailsOrderByWithRelationInput
    user?: user_detailsOrderByWithRelationInput
  }

  export type group_joining_request_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: group_joining_request_detailsWhereInput | group_joining_request_detailsWhereInput[]
    OR?: group_joining_request_detailsWhereInput[]
    NOT?: group_joining_request_detailsWhereInput | group_joining_request_detailsWhereInput[]
    group_id?: StringFilter<"group_joining_request_details"> | string
    user_id?: StringFilter<"group_joining_request_details"> | string
    request_note_by_user?: StringNullableFilter<"group_joining_request_details"> | string | null
    rejection_remark?: StringNullableFilter<"group_joining_request_details"> | string | null
    requested_on?: DateTimeNullableFilter<"group_joining_request_details"> | Date | string | null
    responded_on?: DateTimeNullableFilter<"group_joining_request_details"> | Date | string | null
    group?: XOR<Group_detailsScalarRelationFilter, group_detailsWhereInput>
    user?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }, "id">

  export type group_joining_request_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    request_note_by_user?: SortOrderInput | SortOrder
    rejection_remark?: SortOrderInput | SortOrder
    requested_on?: SortOrderInput | SortOrder
    responded_on?: SortOrderInput | SortOrder
    _count?: group_joining_request_detailsCountOrderByAggregateInput
    _max?: group_joining_request_detailsMaxOrderByAggregateInput
    _min?: group_joining_request_detailsMinOrderByAggregateInput
  }

  export type group_joining_request_detailsScalarWhereWithAggregatesInput = {
    AND?: group_joining_request_detailsScalarWhereWithAggregatesInput | group_joining_request_detailsScalarWhereWithAggregatesInput[]
    OR?: group_joining_request_detailsScalarWhereWithAggregatesInput[]
    NOT?: group_joining_request_detailsScalarWhereWithAggregatesInput | group_joining_request_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"group_joining_request_details"> | string
    group_id?: StringWithAggregatesFilter<"group_joining_request_details"> | string
    user_id?: StringWithAggregatesFilter<"group_joining_request_details"> | string
    request_note_by_user?: StringNullableWithAggregatesFilter<"group_joining_request_details"> | string | null
    rejection_remark?: StringNullableWithAggregatesFilter<"group_joining_request_details"> | string | null
    requested_on?: DateTimeNullableWithAggregatesFilter<"group_joining_request_details"> | Date | string | null
    responded_on?: DateTimeNullableWithAggregatesFilter<"group_joining_request_details"> | Date | string | null
  }

  export type notice_board_detailsWhereInput = {
    AND?: notice_board_detailsWhereInput | notice_board_detailsWhereInput[]
    OR?: notice_board_detailsWhereInput[]
    NOT?: notice_board_detailsWhereInput | notice_board_detailsWhereInput[]
    id?: StringFilter<"notice_board_details"> | string
    board_text?: StringNullableFilter<"notice_board_details"> | string | null
    group_id?: StringFilter<"notice_board_details"> | string
    user_id?: StringFilter<"notice_board_details"> | string
    createdAt?: DateTimeFilter<"notice_board_details"> | Date | string
    updatedAt?: DateTimeFilter<"notice_board_details"> | Date | string
    handled_by?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }

  export type notice_board_detailsOrderByWithRelationInput = {
    id?: SortOrder
    board_text?: SortOrderInput | SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    handled_by?: user_detailsOrderByWithRelationInput
  }

  export type notice_board_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notice_board_detailsWhereInput | notice_board_detailsWhereInput[]
    OR?: notice_board_detailsWhereInput[]
    NOT?: notice_board_detailsWhereInput | notice_board_detailsWhereInput[]
    board_text?: StringNullableFilter<"notice_board_details"> | string | null
    group_id?: StringFilter<"notice_board_details"> | string
    user_id?: StringFilter<"notice_board_details"> | string
    createdAt?: DateTimeFilter<"notice_board_details"> | Date | string
    updatedAt?: DateTimeFilter<"notice_board_details"> | Date | string
    handled_by?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }, "id">

  export type notice_board_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    board_text?: SortOrderInput | SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: notice_board_detailsCountOrderByAggregateInput
    _max?: notice_board_detailsMaxOrderByAggregateInput
    _min?: notice_board_detailsMinOrderByAggregateInput
  }

  export type notice_board_detailsScalarWhereWithAggregatesInput = {
    AND?: notice_board_detailsScalarWhereWithAggregatesInput | notice_board_detailsScalarWhereWithAggregatesInput[]
    OR?: notice_board_detailsScalarWhereWithAggregatesInput[]
    NOT?: notice_board_detailsScalarWhereWithAggregatesInput | notice_board_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notice_board_details"> | string
    board_text?: StringNullableWithAggregatesFilter<"notice_board_details"> | string | null
    group_id?: StringWithAggregatesFilter<"notice_board_details"> | string
    user_id?: StringWithAggregatesFilter<"notice_board_details"> | string
    createdAt?: DateTimeWithAggregatesFilter<"notice_board_details"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"notice_board_details"> | Date | string
  }

  export type user_group_mappingWhereInput = {
    AND?: user_group_mappingWhereInput | user_group_mappingWhereInput[]
    OR?: user_group_mappingWhereInput[]
    NOT?: user_group_mappingWhereInput | user_group_mappingWhereInput[]
    id?: StringFilter<"user_group_mapping"> | string
    group_id?: StringFilter<"user_group_mapping"> | string
    user_id?: StringFilter<"user_group_mapping"> | string
    createdAt?: DateTimeFilter<"user_group_mapping"> | Date | string
    updatedAt?: DateTimeFilter<"user_group_mapping"> | Date | string
    joining_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    leaving_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    leaving_reason?: StringNullableFilter<"user_group_mapping"> | string | null
    removed_reason?: StringNullableFilter<"user_group_mapping"> | string | null
    removed_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    is_active_member?: BoolNullableFilter<"user_group_mapping"> | boolean | null
    group_details?: XOR<Group_detailsScalarRelationFilter, group_detailsWhereInput>
    user_details?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }

  export type user_group_mappingOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    joining_date?: SortOrderInput | SortOrder
    leaving_date?: SortOrderInput | SortOrder
    leaving_reason?: SortOrderInput | SortOrder
    removed_reason?: SortOrderInput | SortOrder
    removed_date?: SortOrderInput | SortOrder
    is_active_member?: SortOrderInput | SortOrder
    group_details?: group_detailsOrderByWithRelationInput
    user_details?: user_detailsOrderByWithRelationInput
  }

  export type user_group_mappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_group_mappingWhereInput | user_group_mappingWhereInput[]
    OR?: user_group_mappingWhereInput[]
    NOT?: user_group_mappingWhereInput | user_group_mappingWhereInput[]
    group_id?: StringFilter<"user_group_mapping"> | string
    user_id?: StringFilter<"user_group_mapping"> | string
    createdAt?: DateTimeFilter<"user_group_mapping"> | Date | string
    updatedAt?: DateTimeFilter<"user_group_mapping"> | Date | string
    joining_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    leaving_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    leaving_reason?: StringNullableFilter<"user_group_mapping"> | string | null
    removed_reason?: StringNullableFilter<"user_group_mapping"> | string | null
    removed_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    is_active_member?: BoolNullableFilter<"user_group_mapping"> | boolean | null
    group_details?: XOR<Group_detailsScalarRelationFilter, group_detailsWhereInput>
    user_details?: XOR<User_detailsScalarRelationFilter, user_detailsWhereInput>
  }, "id">

  export type user_group_mappingOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    joining_date?: SortOrderInput | SortOrder
    leaving_date?: SortOrderInput | SortOrder
    leaving_reason?: SortOrderInput | SortOrder
    removed_reason?: SortOrderInput | SortOrder
    removed_date?: SortOrderInput | SortOrder
    is_active_member?: SortOrderInput | SortOrder
    _count?: user_group_mappingCountOrderByAggregateInput
    _max?: user_group_mappingMaxOrderByAggregateInput
    _min?: user_group_mappingMinOrderByAggregateInput
  }

  export type user_group_mappingScalarWhereWithAggregatesInput = {
    AND?: user_group_mappingScalarWhereWithAggregatesInput | user_group_mappingScalarWhereWithAggregatesInput[]
    OR?: user_group_mappingScalarWhereWithAggregatesInput[]
    NOT?: user_group_mappingScalarWhereWithAggregatesInput | user_group_mappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_group_mapping"> | string
    group_id?: StringWithAggregatesFilter<"user_group_mapping"> | string
    user_id?: StringWithAggregatesFilter<"user_group_mapping"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user_group_mapping"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user_group_mapping"> | Date | string
    joining_date?: DateTimeNullableWithAggregatesFilter<"user_group_mapping"> | Date | string | null
    leaving_date?: DateTimeNullableWithAggregatesFilter<"user_group_mapping"> | Date | string | null
    leaving_reason?: StringNullableWithAggregatesFilter<"user_group_mapping"> | string | null
    removed_reason?: StringNullableWithAggregatesFilter<"user_group_mapping"> | string | null
    removed_date?: DateTimeNullableWithAggregatesFilter<"user_group_mapping"> | Date | string | null
    is_active_member?: BoolNullableWithAggregatesFilter<"user_group_mapping"> | boolean | null
  }

  export type user_detailsCreateInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsUncheckedCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsUncheckedCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingUncheckedCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUncheckedUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUncheckedUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUncheckedUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsCreateManyInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
  }

  export type user_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
  }

  export type user_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
  }

  export type group_detailsCreateInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by: user_detailsCreateNestedOneWithoutGroup_detailsInput
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutGroupInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutGroup_detailsInput
  }

  export type group_detailsUncheckedCreateInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    admin_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutGroupInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutGroup_detailsInput
  }

  export type group_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: user_detailsUpdateOneRequiredWithoutGroup_detailsNestedInput
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutGroupNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutGroup_detailsNestedInput
  }

  export type group_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutGroupNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutGroup_detailsNestedInput
  }

  export type group_detailsCreateManyInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    admin_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_cohort_mappingCreateInput = {
    id?: string
    cohort: cohort_detailsCreateNestedOneWithoutUserCohortsInput
    user: user_detailsCreateNestedOneWithoutUser_cohort_mappingInput
  }

  export type user_cohort_mappingUncheckedCreateInput = {
    id?: string
    user_id: string
    cohort_id: string
  }

  export type user_cohort_mappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort?: cohort_detailsUpdateOneRequiredWithoutUserCohortsNestedInput
    user?: user_detailsUpdateOneRequiredWithoutUser_cohort_mappingNestedInput
  }

  export type user_cohort_mappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cohort_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_cohort_mappingCreateManyInput = {
    id?: string
    user_id: string
    cohort_id: string
  }

  export type user_cohort_mappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type user_cohort_mappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cohort_id?: StringFieldUpdateOperationsInput | string
  }

  export type cohort_detailsCreateInput = {
    id?: string
    cohort_name: string
    userCohorts?: user_cohort_mappingCreateNestedManyWithoutCohortInput
  }

  export type cohort_detailsUncheckedCreateInput = {
    id?: string
    cohort_name: string
    userCohorts?: user_cohort_mappingUncheckedCreateNestedManyWithoutCohortInput
  }

  export type cohort_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_name?: StringFieldUpdateOperationsInput | string
    userCohorts?: user_cohort_mappingUpdateManyWithoutCohortNestedInput
  }

  export type cohort_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_name?: StringFieldUpdateOperationsInput | string
    userCohorts?: user_cohort_mappingUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type cohort_detailsCreateManyInput = {
    id?: string
    cohort_name: string
  }

  export type cohort_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_name?: StringFieldUpdateOperationsInput | string
  }

  export type cohort_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_name?: StringFieldUpdateOperationsInput | string
  }

  export type group_joining_request_detailsCreateInput = {
    id?: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
    group: group_detailsCreateNestedOneWithoutGroup_joining_request_detailsInput
    user: user_detailsCreateNestedOneWithoutGroup_joining_request_detailsInput
  }

  export type group_joining_request_detailsUncheckedCreateInput = {
    id?: string
    group_id: string
    user_id: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
  }

  export type group_joining_request_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: group_detailsUpdateOneRequiredWithoutGroup_joining_request_detailsNestedInput
    user?: user_detailsUpdateOneRequiredWithoutGroup_joining_request_detailsNestedInput
  }

  export type group_joining_request_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_joining_request_detailsCreateManyInput = {
    id?: string
    group_id: string
    user_id: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
  }

  export type group_joining_request_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_joining_request_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notice_board_detailsCreateInput = {
    id?: string
    board_text?: string | null
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    handled_by: user_detailsCreateNestedOneWithoutNotice_board_detailsInput
  }

  export type notice_board_detailsUncheckedCreateInput = {
    id?: string
    board_text?: string | null
    group_id: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notice_board_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handled_by?: user_detailsUpdateOneRequiredWithoutNotice_board_detailsNestedInput
  }

  export type notice_board_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notice_board_detailsCreateManyInput = {
    id?: string
    board_text?: string | null
    group_id: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notice_board_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notice_board_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_group_mappingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
    group_details: group_detailsCreateNestedOneWithoutUser_group_mappingInput
    user_details: user_detailsCreateNestedOneWithoutUser_group_mappingInput
  }

  export type user_group_mappingUncheckedCreateInput = {
    id?: string
    group_id: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
  }

  export type user_group_mappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
    group_details?: group_detailsUpdateOneRequiredWithoutUser_group_mappingNestedInput
    user_details?: user_detailsUpdateOneRequiredWithoutUser_group_mappingNestedInput
  }

  export type user_group_mappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_group_mappingCreateManyInput = {
    id?: string
    group_id: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
  }

  export type user_group_mappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_group_mappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type Group_detailsListRelationFilter = {
    every?: group_detailsWhereInput
    some?: group_detailsWhereInput
    none?: group_detailsWhereInput
  }

  export type Group_joining_request_detailsListRelationFilter = {
    every?: group_joining_request_detailsWhereInput
    some?: group_joining_request_detailsWhereInput
    none?: group_joining_request_detailsWhereInput
  }

  export type Notice_board_detailsListRelationFilter = {
    every?: notice_board_detailsWhereInput
    some?: notice_board_detailsWhereInput
    none?: notice_board_detailsWhereInput
  }

  export type User_cohort_mappingListRelationFilter = {
    every?: user_cohort_mappingWhereInput
    some?: user_cohort_mappingWhereInput
    none?: user_cohort_mappingWhereInput
  }

  export type User_group_mappingListRelationFilter = {
    every?: user_group_mappingWhereInput
    some?: user_group_mappingWhereInput
    none?: user_group_mappingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type group_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type group_joining_request_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notice_board_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_cohort_mappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_group_mappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frist_name?: SortOrder
    last_name?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    github_link?: SortOrder
    hashnode_link?: SortOrder
    peerlist_link?: SortOrder
    tweeter_link?: SortOrder
  }

  export type user_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frist_name?: SortOrder
    last_name?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    github_link?: SortOrder
    hashnode_link?: SortOrder
    peerlist_link?: SortOrder
    tweeter_link?: SortOrder
  }

  export type user_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frist_name?: SortOrder
    last_name?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    github_link?: SortOrder
    hashnode_link?: SortOrder
    peerlist_link?: SortOrder
    tweeter_link?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_detailsScalarRelationFilter = {
    is?: user_detailsWhereInput
    isNot?: user_detailsWhereInput
  }

  export type group_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_desc?: SortOrder
    is_published?: SortOrder
    admin_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type group_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_desc?: SortOrder
    is_published?: SortOrder
    admin_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type group_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_desc?: SortOrder
    is_published?: SortOrder
    admin_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Cohort_detailsScalarRelationFilter = {
    is?: cohort_detailsWhereInput
    isNot?: cohort_detailsWhereInput
  }

  export type user_cohort_mappingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    cohort_id?: SortOrder
  }

  export type user_cohort_mappingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    cohort_id?: SortOrder
  }

  export type user_cohort_mappingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    cohort_id?: SortOrder
  }

  export type cohort_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    cohort_name?: SortOrder
  }

  export type cohort_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    cohort_name?: SortOrder
  }

  export type cohort_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    cohort_name?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Group_detailsScalarRelationFilter = {
    is?: group_detailsWhereInput
    isNot?: group_detailsWhereInput
  }

  export type group_joining_request_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    request_note_by_user?: SortOrder
    rejection_remark?: SortOrder
    requested_on?: SortOrder
    responded_on?: SortOrder
  }

  export type group_joining_request_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    request_note_by_user?: SortOrder
    rejection_remark?: SortOrder
    requested_on?: SortOrder
    responded_on?: SortOrder
  }

  export type group_joining_request_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    request_note_by_user?: SortOrder
    rejection_remark?: SortOrder
    requested_on?: SortOrder
    responded_on?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type notice_board_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    board_text?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notice_board_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    board_text?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notice_board_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    board_text?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type user_group_mappingCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    joining_date?: SortOrder
    leaving_date?: SortOrder
    leaving_reason?: SortOrder
    removed_reason?: SortOrder
    removed_date?: SortOrder
    is_active_member?: SortOrder
  }

  export type user_group_mappingMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    joining_date?: SortOrder
    leaving_date?: SortOrder
    leaving_reason?: SortOrder
    removed_reason?: SortOrder
    removed_date?: SortOrder
    is_active_member?: SortOrder
  }

  export type user_group_mappingMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    joining_date?: SortOrder
    leaving_date?: SortOrder
    leaving_reason?: SortOrder
    removed_reason?: SortOrder
    removed_date?: SortOrder
    is_active_member?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type group_detailsCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<group_detailsCreateWithoutCreated_byInput, group_detailsUncheckedCreateWithoutCreated_byInput> | group_detailsCreateWithoutCreated_byInput[] | group_detailsUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: group_detailsCreateOrConnectWithoutCreated_byInput | group_detailsCreateOrConnectWithoutCreated_byInput[]
    createMany?: group_detailsCreateManyCreated_byInputEnvelope
    connect?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
  }

  export type group_joining_request_detailsCreateNestedManyWithoutUserInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutUserInput, group_joining_request_detailsUncheckedCreateWithoutUserInput> | group_joining_request_detailsCreateWithoutUserInput[] | group_joining_request_detailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutUserInput | group_joining_request_detailsCreateOrConnectWithoutUserInput[]
    createMany?: group_joining_request_detailsCreateManyUserInputEnvelope
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
  }

  export type notice_board_detailsCreateNestedManyWithoutHandled_byInput = {
    create?: XOR<notice_board_detailsCreateWithoutHandled_byInput, notice_board_detailsUncheckedCreateWithoutHandled_byInput> | notice_board_detailsCreateWithoutHandled_byInput[] | notice_board_detailsUncheckedCreateWithoutHandled_byInput[]
    connectOrCreate?: notice_board_detailsCreateOrConnectWithoutHandled_byInput | notice_board_detailsCreateOrConnectWithoutHandled_byInput[]
    createMany?: notice_board_detailsCreateManyHandled_byInputEnvelope
    connect?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
  }

  export type user_cohort_mappingCreateNestedManyWithoutUserInput = {
    create?: XOR<user_cohort_mappingCreateWithoutUserInput, user_cohort_mappingUncheckedCreateWithoutUserInput> | user_cohort_mappingCreateWithoutUserInput[] | user_cohort_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutUserInput | user_cohort_mappingCreateOrConnectWithoutUserInput[]
    createMany?: user_cohort_mappingCreateManyUserInputEnvelope
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
  }

  export type user_group_mappingCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<user_group_mappingCreateWithoutUser_detailsInput, user_group_mappingUncheckedCreateWithoutUser_detailsInput> | user_group_mappingCreateWithoutUser_detailsInput[] | user_group_mappingUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutUser_detailsInput | user_group_mappingCreateOrConnectWithoutUser_detailsInput[]
    createMany?: user_group_mappingCreateManyUser_detailsInputEnvelope
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
  }

  export type group_detailsUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<group_detailsCreateWithoutCreated_byInput, group_detailsUncheckedCreateWithoutCreated_byInput> | group_detailsCreateWithoutCreated_byInput[] | group_detailsUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: group_detailsCreateOrConnectWithoutCreated_byInput | group_detailsCreateOrConnectWithoutCreated_byInput[]
    createMany?: group_detailsCreateManyCreated_byInputEnvelope
    connect?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
  }

  export type group_joining_request_detailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutUserInput, group_joining_request_detailsUncheckedCreateWithoutUserInput> | group_joining_request_detailsCreateWithoutUserInput[] | group_joining_request_detailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutUserInput | group_joining_request_detailsCreateOrConnectWithoutUserInput[]
    createMany?: group_joining_request_detailsCreateManyUserInputEnvelope
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
  }

  export type notice_board_detailsUncheckedCreateNestedManyWithoutHandled_byInput = {
    create?: XOR<notice_board_detailsCreateWithoutHandled_byInput, notice_board_detailsUncheckedCreateWithoutHandled_byInput> | notice_board_detailsCreateWithoutHandled_byInput[] | notice_board_detailsUncheckedCreateWithoutHandled_byInput[]
    connectOrCreate?: notice_board_detailsCreateOrConnectWithoutHandled_byInput | notice_board_detailsCreateOrConnectWithoutHandled_byInput[]
    createMany?: notice_board_detailsCreateManyHandled_byInputEnvelope
    connect?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
  }

  export type user_cohort_mappingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_cohort_mappingCreateWithoutUserInput, user_cohort_mappingUncheckedCreateWithoutUserInput> | user_cohort_mappingCreateWithoutUserInput[] | user_cohort_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutUserInput | user_cohort_mappingCreateOrConnectWithoutUserInput[]
    createMany?: user_cohort_mappingCreateManyUserInputEnvelope
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
  }

  export type user_group_mappingUncheckedCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<user_group_mappingCreateWithoutUser_detailsInput, user_group_mappingUncheckedCreateWithoutUser_detailsInput> | user_group_mappingCreateWithoutUser_detailsInput[] | user_group_mappingUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutUser_detailsInput | user_group_mappingCreateOrConnectWithoutUser_detailsInput[]
    createMany?: user_group_mappingCreateManyUser_detailsInputEnvelope
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type group_detailsUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<group_detailsCreateWithoutCreated_byInput, group_detailsUncheckedCreateWithoutCreated_byInput> | group_detailsCreateWithoutCreated_byInput[] | group_detailsUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: group_detailsCreateOrConnectWithoutCreated_byInput | group_detailsCreateOrConnectWithoutCreated_byInput[]
    upsert?: group_detailsUpsertWithWhereUniqueWithoutCreated_byInput | group_detailsUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: group_detailsCreateManyCreated_byInputEnvelope
    set?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    disconnect?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    delete?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    connect?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    update?: group_detailsUpdateWithWhereUniqueWithoutCreated_byInput | group_detailsUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: group_detailsUpdateManyWithWhereWithoutCreated_byInput | group_detailsUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: group_detailsScalarWhereInput | group_detailsScalarWhereInput[]
  }

  export type group_joining_request_detailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutUserInput, group_joining_request_detailsUncheckedCreateWithoutUserInput> | group_joining_request_detailsCreateWithoutUserInput[] | group_joining_request_detailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutUserInput | group_joining_request_detailsCreateOrConnectWithoutUserInput[]
    upsert?: group_joining_request_detailsUpsertWithWhereUniqueWithoutUserInput | group_joining_request_detailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: group_joining_request_detailsCreateManyUserInputEnvelope
    set?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    disconnect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    delete?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    update?: group_joining_request_detailsUpdateWithWhereUniqueWithoutUserInput | group_joining_request_detailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: group_joining_request_detailsUpdateManyWithWhereWithoutUserInput | group_joining_request_detailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: group_joining_request_detailsScalarWhereInput | group_joining_request_detailsScalarWhereInput[]
  }

  export type notice_board_detailsUpdateManyWithoutHandled_byNestedInput = {
    create?: XOR<notice_board_detailsCreateWithoutHandled_byInput, notice_board_detailsUncheckedCreateWithoutHandled_byInput> | notice_board_detailsCreateWithoutHandled_byInput[] | notice_board_detailsUncheckedCreateWithoutHandled_byInput[]
    connectOrCreate?: notice_board_detailsCreateOrConnectWithoutHandled_byInput | notice_board_detailsCreateOrConnectWithoutHandled_byInput[]
    upsert?: notice_board_detailsUpsertWithWhereUniqueWithoutHandled_byInput | notice_board_detailsUpsertWithWhereUniqueWithoutHandled_byInput[]
    createMany?: notice_board_detailsCreateManyHandled_byInputEnvelope
    set?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    disconnect?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    delete?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    connect?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    update?: notice_board_detailsUpdateWithWhereUniqueWithoutHandled_byInput | notice_board_detailsUpdateWithWhereUniqueWithoutHandled_byInput[]
    updateMany?: notice_board_detailsUpdateManyWithWhereWithoutHandled_byInput | notice_board_detailsUpdateManyWithWhereWithoutHandled_byInput[]
    deleteMany?: notice_board_detailsScalarWhereInput | notice_board_detailsScalarWhereInput[]
  }

  export type user_cohort_mappingUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_cohort_mappingCreateWithoutUserInput, user_cohort_mappingUncheckedCreateWithoutUserInput> | user_cohort_mappingCreateWithoutUserInput[] | user_cohort_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutUserInput | user_cohort_mappingCreateOrConnectWithoutUserInput[]
    upsert?: user_cohort_mappingUpsertWithWhereUniqueWithoutUserInput | user_cohort_mappingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_cohort_mappingCreateManyUserInputEnvelope
    set?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    disconnect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    delete?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    update?: user_cohort_mappingUpdateWithWhereUniqueWithoutUserInput | user_cohort_mappingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_cohort_mappingUpdateManyWithWhereWithoutUserInput | user_cohort_mappingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_cohort_mappingScalarWhereInput | user_cohort_mappingScalarWhereInput[]
  }

  export type user_group_mappingUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<user_group_mappingCreateWithoutUser_detailsInput, user_group_mappingUncheckedCreateWithoutUser_detailsInput> | user_group_mappingCreateWithoutUser_detailsInput[] | user_group_mappingUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutUser_detailsInput | user_group_mappingCreateOrConnectWithoutUser_detailsInput[]
    upsert?: user_group_mappingUpsertWithWhereUniqueWithoutUser_detailsInput | user_group_mappingUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: user_group_mappingCreateManyUser_detailsInputEnvelope
    set?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    disconnect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    delete?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    update?: user_group_mappingUpdateWithWhereUniqueWithoutUser_detailsInput | user_group_mappingUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: user_group_mappingUpdateManyWithWhereWithoutUser_detailsInput | user_group_mappingUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: user_group_mappingScalarWhereInput | user_group_mappingScalarWhereInput[]
  }

  export type group_detailsUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<group_detailsCreateWithoutCreated_byInput, group_detailsUncheckedCreateWithoutCreated_byInput> | group_detailsCreateWithoutCreated_byInput[] | group_detailsUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: group_detailsCreateOrConnectWithoutCreated_byInput | group_detailsCreateOrConnectWithoutCreated_byInput[]
    upsert?: group_detailsUpsertWithWhereUniqueWithoutCreated_byInput | group_detailsUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: group_detailsCreateManyCreated_byInputEnvelope
    set?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    disconnect?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    delete?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    connect?: group_detailsWhereUniqueInput | group_detailsWhereUniqueInput[]
    update?: group_detailsUpdateWithWhereUniqueWithoutCreated_byInput | group_detailsUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: group_detailsUpdateManyWithWhereWithoutCreated_byInput | group_detailsUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: group_detailsScalarWhereInput | group_detailsScalarWhereInput[]
  }

  export type group_joining_request_detailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutUserInput, group_joining_request_detailsUncheckedCreateWithoutUserInput> | group_joining_request_detailsCreateWithoutUserInput[] | group_joining_request_detailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutUserInput | group_joining_request_detailsCreateOrConnectWithoutUserInput[]
    upsert?: group_joining_request_detailsUpsertWithWhereUniqueWithoutUserInput | group_joining_request_detailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: group_joining_request_detailsCreateManyUserInputEnvelope
    set?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    disconnect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    delete?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    update?: group_joining_request_detailsUpdateWithWhereUniqueWithoutUserInput | group_joining_request_detailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: group_joining_request_detailsUpdateManyWithWhereWithoutUserInput | group_joining_request_detailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: group_joining_request_detailsScalarWhereInput | group_joining_request_detailsScalarWhereInput[]
  }

  export type notice_board_detailsUncheckedUpdateManyWithoutHandled_byNestedInput = {
    create?: XOR<notice_board_detailsCreateWithoutHandled_byInput, notice_board_detailsUncheckedCreateWithoutHandled_byInput> | notice_board_detailsCreateWithoutHandled_byInput[] | notice_board_detailsUncheckedCreateWithoutHandled_byInput[]
    connectOrCreate?: notice_board_detailsCreateOrConnectWithoutHandled_byInput | notice_board_detailsCreateOrConnectWithoutHandled_byInput[]
    upsert?: notice_board_detailsUpsertWithWhereUniqueWithoutHandled_byInput | notice_board_detailsUpsertWithWhereUniqueWithoutHandled_byInput[]
    createMany?: notice_board_detailsCreateManyHandled_byInputEnvelope
    set?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    disconnect?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    delete?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    connect?: notice_board_detailsWhereUniqueInput | notice_board_detailsWhereUniqueInput[]
    update?: notice_board_detailsUpdateWithWhereUniqueWithoutHandled_byInput | notice_board_detailsUpdateWithWhereUniqueWithoutHandled_byInput[]
    updateMany?: notice_board_detailsUpdateManyWithWhereWithoutHandled_byInput | notice_board_detailsUpdateManyWithWhereWithoutHandled_byInput[]
    deleteMany?: notice_board_detailsScalarWhereInput | notice_board_detailsScalarWhereInput[]
  }

  export type user_cohort_mappingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_cohort_mappingCreateWithoutUserInput, user_cohort_mappingUncheckedCreateWithoutUserInput> | user_cohort_mappingCreateWithoutUserInput[] | user_cohort_mappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutUserInput | user_cohort_mappingCreateOrConnectWithoutUserInput[]
    upsert?: user_cohort_mappingUpsertWithWhereUniqueWithoutUserInput | user_cohort_mappingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_cohort_mappingCreateManyUserInputEnvelope
    set?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    disconnect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    delete?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    update?: user_cohort_mappingUpdateWithWhereUniqueWithoutUserInput | user_cohort_mappingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_cohort_mappingUpdateManyWithWhereWithoutUserInput | user_cohort_mappingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_cohort_mappingScalarWhereInput | user_cohort_mappingScalarWhereInput[]
  }

  export type user_group_mappingUncheckedUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<user_group_mappingCreateWithoutUser_detailsInput, user_group_mappingUncheckedCreateWithoutUser_detailsInput> | user_group_mappingCreateWithoutUser_detailsInput[] | user_group_mappingUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutUser_detailsInput | user_group_mappingCreateOrConnectWithoutUser_detailsInput[]
    upsert?: user_group_mappingUpsertWithWhereUniqueWithoutUser_detailsInput | user_group_mappingUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: user_group_mappingCreateManyUser_detailsInputEnvelope
    set?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    disconnect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    delete?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    update?: user_group_mappingUpdateWithWhereUniqueWithoutUser_detailsInput | user_group_mappingUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: user_group_mappingUpdateManyWithWhereWithoutUser_detailsInput | user_group_mappingUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: user_group_mappingScalarWhereInput | user_group_mappingScalarWhereInput[]
  }

  export type user_detailsCreateNestedOneWithoutGroup_detailsInput = {
    create?: XOR<user_detailsCreateWithoutGroup_detailsInput, user_detailsUncheckedCreateWithoutGroup_detailsInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutGroup_detailsInput
    connect?: user_detailsWhereUniqueInput
  }

  export type group_joining_request_detailsCreateNestedManyWithoutGroupInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutGroupInput, group_joining_request_detailsUncheckedCreateWithoutGroupInput> | group_joining_request_detailsCreateWithoutGroupInput[] | group_joining_request_detailsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutGroupInput | group_joining_request_detailsCreateOrConnectWithoutGroupInput[]
    createMany?: group_joining_request_detailsCreateManyGroupInputEnvelope
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
  }

  export type user_group_mappingCreateNestedManyWithoutGroup_detailsInput = {
    create?: XOR<user_group_mappingCreateWithoutGroup_detailsInput, user_group_mappingUncheckedCreateWithoutGroup_detailsInput> | user_group_mappingCreateWithoutGroup_detailsInput[] | user_group_mappingUncheckedCreateWithoutGroup_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutGroup_detailsInput | user_group_mappingCreateOrConnectWithoutGroup_detailsInput[]
    createMany?: user_group_mappingCreateManyGroup_detailsInputEnvelope
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
  }

  export type group_joining_request_detailsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutGroupInput, group_joining_request_detailsUncheckedCreateWithoutGroupInput> | group_joining_request_detailsCreateWithoutGroupInput[] | group_joining_request_detailsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutGroupInput | group_joining_request_detailsCreateOrConnectWithoutGroupInput[]
    createMany?: group_joining_request_detailsCreateManyGroupInputEnvelope
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
  }

  export type user_group_mappingUncheckedCreateNestedManyWithoutGroup_detailsInput = {
    create?: XOR<user_group_mappingCreateWithoutGroup_detailsInput, user_group_mappingUncheckedCreateWithoutGroup_detailsInput> | user_group_mappingCreateWithoutGroup_detailsInput[] | user_group_mappingUncheckedCreateWithoutGroup_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutGroup_detailsInput | user_group_mappingCreateOrConnectWithoutGroup_detailsInput[]
    createMany?: user_group_mappingCreateManyGroup_detailsInputEnvelope
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_detailsUpdateOneRequiredWithoutGroup_detailsNestedInput = {
    create?: XOR<user_detailsCreateWithoutGroup_detailsInput, user_detailsUncheckedCreateWithoutGroup_detailsInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutGroup_detailsInput
    upsert?: user_detailsUpsertWithoutGroup_detailsInput
    connect?: user_detailsWhereUniqueInput
    update?: XOR<XOR<user_detailsUpdateToOneWithWhereWithoutGroup_detailsInput, user_detailsUpdateWithoutGroup_detailsInput>, user_detailsUncheckedUpdateWithoutGroup_detailsInput>
  }

  export type group_joining_request_detailsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutGroupInput, group_joining_request_detailsUncheckedCreateWithoutGroupInput> | group_joining_request_detailsCreateWithoutGroupInput[] | group_joining_request_detailsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutGroupInput | group_joining_request_detailsCreateOrConnectWithoutGroupInput[]
    upsert?: group_joining_request_detailsUpsertWithWhereUniqueWithoutGroupInput | group_joining_request_detailsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: group_joining_request_detailsCreateManyGroupInputEnvelope
    set?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    disconnect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    delete?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    update?: group_joining_request_detailsUpdateWithWhereUniqueWithoutGroupInput | group_joining_request_detailsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: group_joining_request_detailsUpdateManyWithWhereWithoutGroupInput | group_joining_request_detailsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: group_joining_request_detailsScalarWhereInput | group_joining_request_detailsScalarWhereInput[]
  }

  export type user_group_mappingUpdateManyWithoutGroup_detailsNestedInput = {
    create?: XOR<user_group_mappingCreateWithoutGroup_detailsInput, user_group_mappingUncheckedCreateWithoutGroup_detailsInput> | user_group_mappingCreateWithoutGroup_detailsInput[] | user_group_mappingUncheckedCreateWithoutGroup_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutGroup_detailsInput | user_group_mappingCreateOrConnectWithoutGroup_detailsInput[]
    upsert?: user_group_mappingUpsertWithWhereUniqueWithoutGroup_detailsInput | user_group_mappingUpsertWithWhereUniqueWithoutGroup_detailsInput[]
    createMany?: user_group_mappingCreateManyGroup_detailsInputEnvelope
    set?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    disconnect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    delete?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    update?: user_group_mappingUpdateWithWhereUniqueWithoutGroup_detailsInput | user_group_mappingUpdateWithWhereUniqueWithoutGroup_detailsInput[]
    updateMany?: user_group_mappingUpdateManyWithWhereWithoutGroup_detailsInput | user_group_mappingUpdateManyWithWhereWithoutGroup_detailsInput[]
    deleteMany?: user_group_mappingScalarWhereInput | user_group_mappingScalarWhereInput[]
  }

  export type group_joining_request_detailsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<group_joining_request_detailsCreateWithoutGroupInput, group_joining_request_detailsUncheckedCreateWithoutGroupInput> | group_joining_request_detailsCreateWithoutGroupInput[] | group_joining_request_detailsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_joining_request_detailsCreateOrConnectWithoutGroupInput | group_joining_request_detailsCreateOrConnectWithoutGroupInput[]
    upsert?: group_joining_request_detailsUpsertWithWhereUniqueWithoutGroupInput | group_joining_request_detailsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: group_joining_request_detailsCreateManyGroupInputEnvelope
    set?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    disconnect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    delete?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    connect?: group_joining_request_detailsWhereUniqueInput | group_joining_request_detailsWhereUniqueInput[]
    update?: group_joining_request_detailsUpdateWithWhereUniqueWithoutGroupInput | group_joining_request_detailsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: group_joining_request_detailsUpdateManyWithWhereWithoutGroupInput | group_joining_request_detailsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: group_joining_request_detailsScalarWhereInput | group_joining_request_detailsScalarWhereInput[]
  }

  export type user_group_mappingUncheckedUpdateManyWithoutGroup_detailsNestedInput = {
    create?: XOR<user_group_mappingCreateWithoutGroup_detailsInput, user_group_mappingUncheckedCreateWithoutGroup_detailsInput> | user_group_mappingCreateWithoutGroup_detailsInput[] | user_group_mappingUncheckedCreateWithoutGroup_detailsInput[]
    connectOrCreate?: user_group_mappingCreateOrConnectWithoutGroup_detailsInput | user_group_mappingCreateOrConnectWithoutGroup_detailsInput[]
    upsert?: user_group_mappingUpsertWithWhereUniqueWithoutGroup_detailsInput | user_group_mappingUpsertWithWhereUniqueWithoutGroup_detailsInput[]
    createMany?: user_group_mappingCreateManyGroup_detailsInputEnvelope
    set?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    disconnect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    delete?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    connect?: user_group_mappingWhereUniqueInput | user_group_mappingWhereUniqueInput[]
    update?: user_group_mappingUpdateWithWhereUniqueWithoutGroup_detailsInput | user_group_mappingUpdateWithWhereUniqueWithoutGroup_detailsInput[]
    updateMany?: user_group_mappingUpdateManyWithWhereWithoutGroup_detailsInput | user_group_mappingUpdateManyWithWhereWithoutGroup_detailsInput[]
    deleteMany?: user_group_mappingScalarWhereInput | user_group_mappingScalarWhereInput[]
  }

  export type cohort_detailsCreateNestedOneWithoutUserCohortsInput = {
    create?: XOR<cohort_detailsCreateWithoutUserCohortsInput, cohort_detailsUncheckedCreateWithoutUserCohortsInput>
    connectOrCreate?: cohort_detailsCreateOrConnectWithoutUserCohortsInput
    connect?: cohort_detailsWhereUniqueInput
  }

  export type user_detailsCreateNestedOneWithoutUser_cohort_mappingInput = {
    create?: XOR<user_detailsCreateWithoutUser_cohort_mappingInput, user_detailsUncheckedCreateWithoutUser_cohort_mappingInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutUser_cohort_mappingInput
    connect?: user_detailsWhereUniqueInput
  }

  export type cohort_detailsUpdateOneRequiredWithoutUserCohortsNestedInput = {
    create?: XOR<cohort_detailsCreateWithoutUserCohortsInput, cohort_detailsUncheckedCreateWithoutUserCohortsInput>
    connectOrCreate?: cohort_detailsCreateOrConnectWithoutUserCohortsInput
    upsert?: cohort_detailsUpsertWithoutUserCohortsInput
    connect?: cohort_detailsWhereUniqueInput
    update?: XOR<XOR<cohort_detailsUpdateToOneWithWhereWithoutUserCohortsInput, cohort_detailsUpdateWithoutUserCohortsInput>, cohort_detailsUncheckedUpdateWithoutUserCohortsInput>
  }

  export type user_detailsUpdateOneRequiredWithoutUser_cohort_mappingNestedInput = {
    create?: XOR<user_detailsCreateWithoutUser_cohort_mappingInput, user_detailsUncheckedCreateWithoutUser_cohort_mappingInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutUser_cohort_mappingInput
    upsert?: user_detailsUpsertWithoutUser_cohort_mappingInput
    connect?: user_detailsWhereUniqueInput
    update?: XOR<XOR<user_detailsUpdateToOneWithWhereWithoutUser_cohort_mappingInput, user_detailsUpdateWithoutUser_cohort_mappingInput>, user_detailsUncheckedUpdateWithoutUser_cohort_mappingInput>
  }

  export type user_cohort_mappingCreateNestedManyWithoutCohortInput = {
    create?: XOR<user_cohort_mappingCreateWithoutCohortInput, user_cohort_mappingUncheckedCreateWithoutCohortInput> | user_cohort_mappingCreateWithoutCohortInput[] | user_cohort_mappingUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutCohortInput | user_cohort_mappingCreateOrConnectWithoutCohortInput[]
    createMany?: user_cohort_mappingCreateManyCohortInputEnvelope
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
  }

  export type user_cohort_mappingUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<user_cohort_mappingCreateWithoutCohortInput, user_cohort_mappingUncheckedCreateWithoutCohortInput> | user_cohort_mappingCreateWithoutCohortInput[] | user_cohort_mappingUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutCohortInput | user_cohort_mappingCreateOrConnectWithoutCohortInput[]
    createMany?: user_cohort_mappingCreateManyCohortInputEnvelope
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
  }

  export type user_cohort_mappingUpdateManyWithoutCohortNestedInput = {
    create?: XOR<user_cohort_mappingCreateWithoutCohortInput, user_cohort_mappingUncheckedCreateWithoutCohortInput> | user_cohort_mappingCreateWithoutCohortInput[] | user_cohort_mappingUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutCohortInput | user_cohort_mappingCreateOrConnectWithoutCohortInput[]
    upsert?: user_cohort_mappingUpsertWithWhereUniqueWithoutCohortInput | user_cohort_mappingUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: user_cohort_mappingCreateManyCohortInputEnvelope
    set?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    disconnect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    delete?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    update?: user_cohort_mappingUpdateWithWhereUniqueWithoutCohortInput | user_cohort_mappingUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: user_cohort_mappingUpdateManyWithWhereWithoutCohortInput | user_cohort_mappingUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: user_cohort_mappingScalarWhereInput | user_cohort_mappingScalarWhereInput[]
  }

  export type user_cohort_mappingUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<user_cohort_mappingCreateWithoutCohortInput, user_cohort_mappingUncheckedCreateWithoutCohortInput> | user_cohort_mappingCreateWithoutCohortInput[] | user_cohort_mappingUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: user_cohort_mappingCreateOrConnectWithoutCohortInput | user_cohort_mappingCreateOrConnectWithoutCohortInput[]
    upsert?: user_cohort_mappingUpsertWithWhereUniqueWithoutCohortInput | user_cohort_mappingUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: user_cohort_mappingCreateManyCohortInputEnvelope
    set?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    disconnect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    delete?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    connect?: user_cohort_mappingWhereUniqueInput | user_cohort_mappingWhereUniqueInput[]
    update?: user_cohort_mappingUpdateWithWhereUniqueWithoutCohortInput | user_cohort_mappingUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: user_cohort_mappingUpdateManyWithWhereWithoutCohortInput | user_cohort_mappingUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: user_cohort_mappingScalarWhereInput | user_cohort_mappingScalarWhereInput[]
  }

  export type group_detailsCreateNestedOneWithoutGroup_joining_request_detailsInput = {
    create?: XOR<group_detailsCreateWithoutGroup_joining_request_detailsInput, group_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
    connectOrCreate?: group_detailsCreateOrConnectWithoutGroup_joining_request_detailsInput
    connect?: group_detailsWhereUniqueInput
  }

  export type user_detailsCreateNestedOneWithoutGroup_joining_request_detailsInput = {
    create?: XOR<user_detailsCreateWithoutGroup_joining_request_detailsInput, user_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutGroup_joining_request_detailsInput
    connect?: user_detailsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type group_detailsUpdateOneRequiredWithoutGroup_joining_request_detailsNestedInput = {
    create?: XOR<group_detailsCreateWithoutGroup_joining_request_detailsInput, group_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
    connectOrCreate?: group_detailsCreateOrConnectWithoutGroup_joining_request_detailsInput
    upsert?: group_detailsUpsertWithoutGroup_joining_request_detailsInput
    connect?: group_detailsWhereUniqueInput
    update?: XOR<XOR<group_detailsUpdateToOneWithWhereWithoutGroup_joining_request_detailsInput, group_detailsUpdateWithoutGroup_joining_request_detailsInput>, group_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput>
  }

  export type user_detailsUpdateOneRequiredWithoutGroup_joining_request_detailsNestedInput = {
    create?: XOR<user_detailsCreateWithoutGroup_joining_request_detailsInput, user_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutGroup_joining_request_detailsInput
    upsert?: user_detailsUpsertWithoutGroup_joining_request_detailsInput
    connect?: user_detailsWhereUniqueInput
    update?: XOR<XOR<user_detailsUpdateToOneWithWhereWithoutGroup_joining_request_detailsInput, user_detailsUpdateWithoutGroup_joining_request_detailsInput>, user_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput>
  }

  export type user_detailsCreateNestedOneWithoutNotice_board_detailsInput = {
    create?: XOR<user_detailsCreateWithoutNotice_board_detailsInput, user_detailsUncheckedCreateWithoutNotice_board_detailsInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutNotice_board_detailsInput
    connect?: user_detailsWhereUniqueInput
  }

  export type user_detailsUpdateOneRequiredWithoutNotice_board_detailsNestedInput = {
    create?: XOR<user_detailsCreateWithoutNotice_board_detailsInput, user_detailsUncheckedCreateWithoutNotice_board_detailsInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutNotice_board_detailsInput
    upsert?: user_detailsUpsertWithoutNotice_board_detailsInput
    connect?: user_detailsWhereUniqueInput
    update?: XOR<XOR<user_detailsUpdateToOneWithWhereWithoutNotice_board_detailsInput, user_detailsUpdateWithoutNotice_board_detailsInput>, user_detailsUncheckedUpdateWithoutNotice_board_detailsInput>
  }

  export type group_detailsCreateNestedOneWithoutUser_group_mappingInput = {
    create?: XOR<group_detailsCreateWithoutUser_group_mappingInput, group_detailsUncheckedCreateWithoutUser_group_mappingInput>
    connectOrCreate?: group_detailsCreateOrConnectWithoutUser_group_mappingInput
    connect?: group_detailsWhereUniqueInput
  }

  export type user_detailsCreateNestedOneWithoutUser_group_mappingInput = {
    create?: XOR<user_detailsCreateWithoutUser_group_mappingInput, user_detailsUncheckedCreateWithoutUser_group_mappingInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutUser_group_mappingInput
    connect?: user_detailsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type group_detailsUpdateOneRequiredWithoutUser_group_mappingNestedInput = {
    create?: XOR<group_detailsCreateWithoutUser_group_mappingInput, group_detailsUncheckedCreateWithoutUser_group_mappingInput>
    connectOrCreate?: group_detailsCreateOrConnectWithoutUser_group_mappingInput
    upsert?: group_detailsUpsertWithoutUser_group_mappingInput
    connect?: group_detailsWhereUniqueInput
    update?: XOR<XOR<group_detailsUpdateToOneWithWhereWithoutUser_group_mappingInput, group_detailsUpdateWithoutUser_group_mappingInput>, group_detailsUncheckedUpdateWithoutUser_group_mappingInput>
  }

  export type user_detailsUpdateOneRequiredWithoutUser_group_mappingNestedInput = {
    create?: XOR<user_detailsCreateWithoutUser_group_mappingInput, user_detailsUncheckedCreateWithoutUser_group_mappingInput>
    connectOrCreate?: user_detailsCreateOrConnectWithoutUser_group_mappingInput
    upsert?: user_detailsUpsertWithoutUser_group_mappingInput
    connect?: user_detailsWhereUniqueInput
    update?: XOR<XOR<user_detailsUpdateToOneWithWhereWithoutUser_group_mappingInput, user_detailsUpdateWithoutUser_group_mappingInput>, user_detailsUncheckedUpdateWithoutUser_group_mappingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type group_detailsCreateWithoutCreated_byInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutGroupInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutGroup_detailsInput
  }

  export type group_detailsUncheckedCreateWithoutCreated_byInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutGroupInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutGroup_detailsInput
  }

  export type group_detailsCreateOrConnectWithoutCreated_byInput = {
    where: group_detailsWhereUniqueInput
    create: XOR<group_detailsCreateWithoutCreated_byInput, group_detailsUncheckedCreateWithoutCreated_byInput>
  }

  export type group_detailsCreateManyCreated_byInputEnvelope = {
    data: group_detailsCreateManyCreated_byInput | group_detailsCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type group_joining_request_detailsCreateWithoutUserInput = {
    id?: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
    group: group_detailsCreateNestedOneWithoutGroup_joining_request_detailsInput
  }

  export type group_joining_request_detailsUncheckedCreateWithoutUserInput = {
    id?: string
    group_id: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
  }

  export type group_joining_request_detailsCreateOrConnectWithoutUserInput = {
    where: group_joining_request_detailsWhereUniqueInput
    create: XOR<group_joining_request_detailsCreateWithoutUserInput, group_joining_request_detailsUncheckedCreateWithoutUserInput>
  }

  export type group_joining_request_detailsCreateManyUserInputEnvelope = {
    data: group_joining_request_detailsCreateManyUserInput | group_joining_request_detailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type notice_board_detailsCreateWithoutHandled_byInput = {
    id?: string
    board_text?: string | null
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notice_board_detailsUncheckedCreateWithoutHandled_byInput = {
    id?: string
    board_text?: string | null
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notice_board_detailsCreateOrConnectWithoutHandled_byInput = {
    where: notice_board_detailsWhereUniqueInput
    create: XOR<notice_board_detailsCreateWithoutHandled_byInput, notice_board_detailsUncheckedCreateWithoutHandled_byInput>
  }

  export type notice_board_detailsCreateManyHandled_byInputEnvelope = {
    data: notice_board_detailsCreateManyHandled_byInput | notice_board_detailsCreateManyHandled_byInput[]
    skipDuplicates?: boolean
  }

  export type user_cohort_mappingCreateWithoutUserInput = {
    id?: string
    cohort: cohort_detailsCreateNestedOneWithoutUserCohortsInput
  }

  export type user_cohort_mappingUncheckedCreateWithoutUserInput = {
    id?: string
    cohort_id: string
  }

  export type user_cohort_mappingCreateOrConnectWithoutUserInput = {
    where: user_cohort_mappingWhereUniqueInput
    create: XOR<user_cohort_mappingCreateWithoutUserInput, user_cohort_mappingUncheckedCreateWithoutUserInput>
  }

  export type user_cohort_mappingCreateManyUserInputEnvelope = {
    data: user_cohort_mappingCreateManyUserInput | user_cohort_mappingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_group_mappingCreateWithoutUser_detailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
    group_details: group_detailsCreateNestedOneWithoutUser_group_mappingInput
  }

  export type user_group_mappingUncheckedCreateWithoutUser_detailsInput = {
    id?: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
  }

  export type user_group_mappingCreateOrConnectWithoutUser_detailsInput = {
    where: user_group_mappingWhereUniqueInput
    create: XOR<user_group_mappingCreateWithoutUser_detailsInput, user_group_mappingUncheckedCreateWithoutUser_detailsInput>
  }

  export type user_group_mappingCreateManyUser_detailsInputEnvelope = {
    data: user_group_mappingCreateManyUser_detailsInput | user_group_mappingCreateManyUser_detailsInput[]
    skipDuplicates?: boolean
  }

  export type group_detailsUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: group_detailsWhereUniqueInput
    update: XOR<group_detailsUpdateWithoutCreated_byInput, group_detailsUncheckedUpdateWithoutCreated_byInput>
    create: XOR<group_detailsCreateWithoutCreated_byInput, group_detailsUncheckedCreateWithoutCreated_byInput>
  }

  export type group_detailsUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: group_detailsWhereUniqueInput
    data: XOR<group_detailsUpdateWithoutCreated_byInput, group_detailsUncheckedUpdateWithoutCreated_byInput>
  }

  export type group_detailsUpdateManyWithWhereWithoutCreated_byInput = {
    where: group_detailsScalarWhereInput
    data: XOR<group_detailsUpdateManyMutationInput, group_detailsUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type group_detailsScalarWhereInput = {
    AND?: group_detailsScalarWhereInput | group_detailsScalarWhereInput[]
    OR?: group_detailsScalarWhereInput[]
    NOT?: group_detailsScalarWhereInput | group_detailsScalarWhereInput[]
    id?: StringFilter<"group_details"> | string
    group_name?: StringFilter<"group_details"> | string
    group_desc?: StringFilter<"group_details"> | string
    is_published?: BoolFilter<"group_details"> | boolean
    admin_id?: StringFilter<"group_details"> | string
    createdAt?: DateTimeFilter<"group_details"> | Date | string
    updatedAt?: DateTimeFilter<"group_details"> | Date | string
  }

  export type group_joining_request_detailsUpsertWithWhereUniqueWithoutUserInput = {
    where: group_joining_request_detailsWhereUniqueInput
    update: XOR<group_joining_request_detailsUpdateWithoutUserInput, group_joining_request_detailsUncheckedUpdateWithoutUserInput>
    create: XOR<group_joining_request_detailsCreateWithoutUserInput, group_joining_request_detailsUncheckedCreateWithoutUserInput>
  }

  export type group_joining_request_detailsUpdateWithWhereUniqueWithoutUserInput = {
    where: group_joining_request_detailsWhereUniqueInput
    data: XOR<group_joining_request_detailsUpdateWithoutUserInput, group_joining_request_detailsUncheckedUpdateWithoutUserInput>
  }

  export type group_joining_request_detailsUpdateManyWithWhereWithoutUserInput = {
    where: group_joining_request_detailsScalarWhereInput
    data: XOR<group_joining_request_detailsUpdateManyMutationInput, group_joining_request_detailsUncheckedUpdateManyWithoutUserInput>
  }

  export type group_joining_request_detailsScalarWhereInput = {
    AND?: group_joining_request_detailsScalarWhereInput | group_joining_request_detailsScalarWhereInput[]
    OR?: group_joining_request_detailsScalarWhereInput[]
    NOT?: group_joining_request_detailsScalarWhereInput | group_joining_request_detailsScalarWhereInput[]
    id?: StringFilter<"group_joining_request_details"> | string
    group_id?: StringFilter<"group_joining_request_details"> | string
    user_id?: StringFilter<"group_joining_request_details"> | string
    request_note_by_user?: StringNullableFilter<"group_joining_request_details"> | string | null
    rejection_remark?: StringNullableFilter<"group_joining_request_details"> | string | null
    requested_on?: DateTimeNullableFilter<"group_joining_request_details"> | Date | string | null
    responded_on?: DateTimeNullableFilter<"group_joining_request_details"> | Date | string | null
  }

  export type notice_board_detailsUpsertWithWhereUniqueWithoutHandled_byInput = {
    where: notice_board_detailsWhereUniqueInput
    update: XOR<notice_board_detailsUpdateWithoutHandled_byInput, notice_board_detailsUncheckedUpdateWithoutHandled_byInput>
    create: XOR<notice_board_detailsCreateWithoutHandled_byInput, notice_board_detailsUncheckedCreateWithoutHandled_byInput>
  }

  export type notice_board_detailsUpdateWithWhereUniqueWithoutHandled_byInput = {
    where: notice_board_detailsWhereUniqueInput
    data: XOR<notice_board_detailsUpdateWithoutHandled_byInput, notice_board_detailsUncheckedUpdateWithoutHandled_byInput>
  }

  export type notice_board_detailsUpdateManyWithWhereWithoutHandled_byInput = {
    where: notice_board_detailsScalarWhereInput
    data: XOR<notice_board_detailsUpdateManyMutationInput, notice_board_detailsUncheckedUpdateManyWithoutHandled_byInput>
  }

  export type notice_board_detailsScalarWhereInput = {
    AND?: notice_board_detailsScalarWhereInput | notice_board_detailsScalarWhereInput[]
    OR?: notice_board_detailsScalarWhereInput[]
    NOT?: notice_board_detailsScalarWhereInput | notice_board_detailsScalarWhereInput[]
    id?: StringFilter<"notice_board_details"> | string
    board_text?: StringNullableFilter<"notice_board_details"> | string | null
    group_id?: StringFilter<"notice_board_details"> | string
    user_id?: StringFilter<"notice_board_details"> | string
    createdAt?: DateTimeFilter<"notice_board_details"> | Date | string
    updatedAt?: DateTimeFilter<"notice_board_details"> | Date | string
  }

  export type user_cohort_mappingUpsertWithWhereUniqueWithoutUserInput = {
    where: user_cohort_mappingWhereUniqueInput
    update: XOR<user_cohort_mappingUpdateWithoutUserInput, user_cohort_mappingUncheckedUpdateWithoutUserInput>
    create: XOR<user_cohort_mappingCreateWithoutUserInput, user_cohort_mappingUncheckedCreateWithoutUserInput>
  }

  export type user_cohort_mappingUpdateWithWhereUniqueWithoutUserInput = {
    where: user_cohort_mappingWhereUniqueInput
    data: XOR<user_cohort_mappingUpdateWithoutUserInput, user_cohort_mappingUncheckedUpdateWithoutUserInput>
  }

  export type user_cohort_mappingUpdateManyWithWhereWithoutUserInput = {
    where: user_cohort_mappingScalarWhereInput
    data: XOR<user_cohort_mappingUpdateManyMutationInput, user_cohort_mappingUncheckedUpdateManyWithoutUserInput>
  }

  export type user_cohort_mappingScalarWhereInput = {
    AND?: user_cohort_mappingScalarWhereInput | user_cohort_mappingScalarWhereInput[]
    OR?: user_cohort_mappingScalarWhereInput[]
    NOT?: user_cohort_mappingScalarWhereInput | user_cohort_mappingScalarWhereInput[]
    id?: StringFilter<"user_cohort_mapping"> | string
    user_id?: StringFilter<"user_cohort_mapping"> | string
    cohort_id?: StringFilter<"user_cohort_mapping"> | string
  }

  export type user_group_mappingUpsertWithWhereUniqueWithoutUser_detailsInput = {
    where: user_group_mappingWhereUniqueInput
    update: XOR<user_group_mappingUpdateWithoutUser_detailsInput, user_group_mappingUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<user_group_mappingCreateWithoutUser_detailsInput, user_group_mappingUncheckedCreateWithoutUser_detailsInput>
  }

  export type user_group_mappingUpdateWithWhereUniqueWithoutUser_detailsInput = {
    where: user_group_mappingWhereUniqueInput
    data: XOR<user_group_mappingUpdateWithoutUser_detailsInput, user_group_mappingUncheckedUpdateWithoutUser_detailsInput>
  }

  export type user_group_mappingUpdateManyWithWhereWithoutUser_detailsInput = {
    where: user_group_mappingScalarWhereInput
    data: XOR<user_group_mappingUpdateManyMutationInput, user_group_mappingUncheckedUpdateManyWithoutUser_detailsInput>
  }

  export type user_group_mappingScalarWhereInput = {
    AND?: user_group_mappingScalarWhereInput | user_group_mappingScalarWhereInput[]
    OR?: user_group_mappingScalarWhereInput[]
    NOT?: user_group_mappingScalarWhereInput | user_group_mappingScalarWhereInput[]
    id?: StringFilter<"user_group_mapping"> | string
    group_id?: StringFilter<"user_group_mapping"> | string
    user_id?: StringFilter<"user_group_mapping"> | string
    createdAt?: DateTimeFilter<"user_group_mapping"> | Date | string
    updatedAt?: DateTimeFilter<"user_group_mapping"> | Date | string
    joining_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    leaving_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    leaving_reason?: StringNullableFilter<"user_group_mapping"> | string | null
    removed_reason?: StringNullableFilter<"user_group_mapping"> | string | null
    removed_date?: DateTimeNullableFilter<"user_group_mapping"> | Date | string | null
    is_active_member?: BoolNullableFilter<"user_group_mapping"> | boolean | null
  }

  export type user_detailsCreateWithoutGroup_detailsInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsUncheckedCreateWithoutGroup_detailsInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsUncheckedCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingUncheckedCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsCreateOrConnectWithoutGroup_detailsInput = {
    where: user_detailsWhereUniqueInput
    create: XOR<user_detailsCreateWithoutGroup_detailsInput, user_detailsUncheckedCreateWithoutGroup_detailsInput>
  }

  export type group_joining_request_detailsCreateWithoutGroupInput = {
    id?: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
    user: user_detailsCreateNestedOneWithoutGroup_joining_request_detailsInput
  }

  export type group_joining_request_detailsUncheckedCreateWithoutGroupInput = {
    id?: string
    user_id: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
  }

  export type group_joining_request_detailsCreateOrConnectWithoutGroupInput = {
    where: group_joining_request_detailsWhereUniqueInput
    create: XOR<group_joining_request_detailsCreateWithoutGroupInput, group_joining_request_detailsUncheckedCreateWithoutGroupInput>
  }

  export type group_joining_request_detailsCreateManyGroupInputEnvelope = {
    data: group_joining_request_detailsCreateManyGroupInput | group_joining_request_detailsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type user_group_mappingCreateWithoutGroup_detailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
    user_details: user_detailsCreateNestedOneWithoutUser_group_mappingInput
  }

  export type user_group_mappingUncheckedCreateWithoutGroup_detailsInput = {
    id?: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
  }

  export type user_group_mappingCreateOrConnectWithoutGroup_detailsInput = {
    where: user_group_mappingWhereUniqueInput
    create: XOR<user_group_mappingCreateWithoutGroup_detailsInput, user_group_mappingUncheckedCreateWithoutGroup_detailsInput>
  }

  export type user_group_mappingCreateManyGroup_detailsInputEnvelope = {
    data: user_group_mappingCreateManyGroup_detailsInput | user_group_mappingCreateManyGroup_detailsInput[]
    skipDuplicates?: boolean
  }

  export type user_detailsUpsertWithoutGroup_detailsInput = {
    update: XOR<user_detailsUpdateWithoutGroup_detailsInput, user_detailsUncheckedUpdateWithoutGroup_detailsInput>
    create: XOR<user_detailsCreateWithoutGroup_detailsInput, user_detailsUncheckedCreateWithoutGroup_detailsInput>
    where?: user_detailsWhereInput
  }

  export type user_detailsUpdateToOneWithWhereWithoutGroup_detailsInput = {
    where?: user_detailsWhereInput
    data: XOR<user_detailsUpdateWithoutGroup_detailsInput, user_detailsUncheckedUpdateWithoutGroup_detailsInput>
  }

  export type user_detailsUpdateWithoutGroup_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsUncheckedUpdateWithoutGroup_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUncheckedUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUncheckedUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutUser_detailsNestedInput
  }

  export type group_joining_request_detailsUpsertWithWhereUniqueWithoutGroupInput = {
    where: group_joining_request_detailsWhereUniqueInput
    update: XOR<group_joining_request_detailsUpdateWithoutGroupInput, group_joining_request_detailsUncheckedUpdateWithoutGroupInput>
    create: XOR<group_joining_request_detailsCreateWithoutGroupInput, group_joining_request_detailsUncheckedCreateWithoutGroupInput>
  }

  export type group_joining_request_detailsUpdateWithWhereUniqueWithoutGroupInput = {
    where: group_joining_request_detailsWhereUniqueInput
    data: XOR<group_joining_request_detailsUpdateWithoutGroupInput, group_joining_request_detailsUncheckedUpdateWithoutGroupInput>
  }

  export type group_joining_request_detailsUpdateManyWithWhereWithoutGroupInput = {
    where: group_joining_request_detailsScalarWhereInput
    data: XOR<group_joining_request_detailsUpdateManyMutationInput, group_joining_request_detailsUncheckedUpdateManyWithoutGroupInput>
  }

  export type user_group_mappingUpsertWithWhereUniqueWithoutGroup_detailsInput = {
    where: user_group_mappingWhereUniqueInput
    update: XOR<user_group_mappingUpdateWithoutGroup_detailsInput, user_group_mappingUncheckedUpdateWithoutGroup_detailsInput>
    create: XOR<user_group_mappingCreateWithoutGroup_detailsInput, user_group_mappingUncheckedCreateWithoutGroup_detailsInput>
  }

  export type user_group_mappingUpdateWithWhereUniqueWithoutGroup_detailsInput = {
    where: user_group_mappingWhereUniqueInput
    data: XOR<user_group_mappingUpdateWithoutGroup_detailsInput, user_group_mappingUncheckedUpdateWithoutGroup_detailsInput>
  }

  export type user_group_mappingUpdateManyWithWhereWithoutGroup_detailsInput = {
    where: user_group_mappingScalarWhereInput
    data: XOR<user_group_mappingUpdateManyMutationInput, user_group_mappingUncheckedUpdateManyWithoutGroup_detailsInput>
  }

  export type cohort_detailsCreateWithoutUserCohortsInput = {
    id?: string
    cohort_name: string
  }

  export type cohort_detailsUncheckedCreateWithoutUserCohortsInput = {
    id?: string
    cohort_name: string
  }

  export type cohort_detailsCreateOrConnectWithoutUserCohortsInput = {
    where: cohort_detailsWhereUniqueInput
    create: XOR<cohort_detailsCreateWithoutUserCohortsInput, cohort_detailsUncheckedCreateWithoutUserCohortsInput>
  }

  export type user_detailsCreateWithoutUser_cohort_mappingInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsCreateNestedManyWithoutHandled_byInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsUncheckedCreateWithoutUser_cohort_mappingInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsUncheckedCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsUncheckedCreateNestedManyWithoutHandled_byInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsCreateOrConnectWithoutUser_cohort_mappingInput = {
    where: user_detailsWhereUniqueInput
    create: XOR<user_detailsCreateWithoutUser_cohort_mappingInput, user_detailsUncheckedCreateWithoutUser_cohort_mappingInput>
  }

  export type cohort_detailsUpsertWithoutUserCohortsInput = {
    update: XOR<cohort_detailsUpdateWithoutUserCohortsInput, cohort_detailsUncheckedUpdateWithoutUserCohortsInput>
    create: XOR<cohort_detailsCreateWithoutUserCohortsInput, cohort_detailsUncheckedCreateWithoutUserCohortsInput>
    where?: cohort_detailsWhereInput
  }

  export type cohort_detailsUpdateToOneWithWhereWithoutUserCohortsInput = {
    where?: cohort_detailsWhereInput
    data: XOR<cohort_detailsUpdateWithoutUserCohortsInput, cohort_detailsUncheckedUpdateWithoutUserCohortsInput>
  }

  export type cohort_detailsUpdateWithoutUserCohortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_name?: StringFieldUpdateOperationsInput | string
  }

  export type cohort_detailsUncheckedUpdateWithoutUserCohortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_name?: StringFieldUpdateOperationsInput | string
  }

  export type user_detailsUpsertWithoutUser_cohort_mappingInput = {
    update: XOR<user_detailsUpdateWithoutUser_cohort_mappingInput, user_detailsUncheckedUpdateWithoutUser_cohort_mappingInput>
    create: XOR<user_detailsCreateWithoutUser_cohort_mappingInput, user_detailsUncheckedCreateWithoutUser_cohort_mappingInput>
    where?: user_detailsWhereInput
  }

  export type user_detailsUpdateToOneWithWhereWithoutUser_cohort_mappingInput = {
    where?: user_detailsWhereInput
    data: XOR<user_detailsUpdateWithoutUser_cohort_mappingInput, user_detailsUncheckedUpdateWithoutUser_cohort_mappingInput>
  }

  export type user_detailsUpdateWithoutUser_cohort_mappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUpdateManyWithoutHandled_byNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsUncheckedUpdateWithoutUser_cohort_mappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUncheckedUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUncheckedUpdateManyWithoutHandled_byNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_cohort_mappingCreateWithoutCohortInput = {
    id?: string
    user: user_detailsCreateNestedOneWithoutUser_cohort_mappingInput
  }

  export type user_cohort_mappingUncheckedCreateWithoutCohortInput = {
    id?: string
    user_id: string
  }

  export type user_cohort_mappingCreateOrConnectWithoutCohortInput = {
    where: user_cohort_mappingWhereUniqueInput
    create: XOR<user_cohort_mappingCreateWithoutCohortInput, user_cohort_mappingUncheckedCreateWithoutCohortInput>
  }

  export type user_cohort_mappingCreateManyCohortInputEnvelope = {
    data: user_cohort_mappingCreateManyCohortInput | user_cohort_mappingCreateManyCohortInput[]
    skipDuplicates?: boolean
  }

  export type user_cohort_mappingUpsertWithWhereUniqueWithoutCohortInput = {
    where: user_cohort_mappingWhereUniqueInput
    update: XOR<user_cohort_mappingUpdateWithoutCohortInput, user_cohort_mappingUncheckedUpdateWithoutCohortInput>
    create: XOR<user_cohort_mappingCreateWithoutCohortInput, user_cohort_mappingUncheckedCreateWithoutCohortInput>
  }

  export type user_cohort_mappingUpdateWithWhereUniqueWithoutCohortInput = {
    where: user_cohort_mappingWhereUniqueInput
    data: XOR<user_cohort_mappingUpdateWithoutCohortInput, user_cohort_mappingUncheckedUpdateWithoutCohortInput>
  }

  export type user_cohort_mappingUpdateManyWithWhereWithoutCohortInput = {
    where: user_cohort_mappingScalarWhereInput
    data: XOR<user_cohort_mappingUpdateManyMutationInput, user_cohort_mappingUncheckedUpdateManyWithoutCohortInput>
  }

  export type group_detailsCreateWithoutGroup_joining_request_detailsInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by: user_detailsCreateNestedOneWithoutGroup_detailsInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutGroup_detailsInput
  }

  export type group_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    admin_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutGroup_detailsInput
  }

  export type group_detailsCreateOrConnectWithoutGroup_joining_request_detailsInput = {
    where: group_detailsWhereUniqueInput
    create: XOR<group_detailsCreateWithoutGroup_joining_request_detailsInput, group_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
  }

  export type user_detailsCreateWithoutGroup_joining_request_detailsInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsCreateNestedManyWithoutCreated_byInput
    notice_board_details?: notice_board_detailsCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsUncheckedCreateNestedManyWithoutCreated_byInput
    notice_board_details?: notice_board_detailsUncheckedCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingUncheckedCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsCreateOrConnectWithoutGroup_joining_request_detailsInput = {
    where: user_detailsWhereUniqueInput
    create: XOR<user_detailsCreateWithoutGroup_joining_request_detailsInput, user_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
  }

  export type group_detailsUpsertWithoutGroup_joining_request_detailsInput = {
    update: XOR<group_detailsUpdateWithoutGroup_joining_request_detailsInput, group_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput>
    create: XOR<group_detailsCreateWithoutGroup_joining_request_detailsInput, group_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
    where?: group_detailsWhereInput
  }

  export type group_detailsUpdateToOneWithWhereWithoutGroup_joining_request_detailsInput = {
    where?: group_detailsWhereInput
    data: XOR<group_detailsUpdateWithoutGroup_joining_request_detailsInput, group_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput>
  }

  export type group_detailsUpdateWithoutGroup_joining_request_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: user_detailsUpdateOneRequiredWithoutGroup_detailsNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutGroup_detailsNestedInput
  }

  export type group_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutGroup_detailsNestedInput
  }

  export type user_detailsUpsertWithoutGroup_joining_request_detailsInput = {
    update: XOR<user_detailsUpdateWithoutGroup_joining_request_detailsInput, user_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput>
    create: XOR<user_detailsCreateWithoutGroup_joining_request_detailsInput, user_detailsUncheckedCreateWithoutGroup_joining_request_detailsInput>
    where?: user_detailsWhereInput
  }

  export type user_detailsUpdateToOneWithWhereWithoutGroup_joining_request_detailsInput = {
    where?: user_detailsWhereInput
    data: XOR<user_detailsUpdateWithoutGroup_joining_request_detailsInput, user_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput>
  }

  export type user_detailsUpdateWithoutGroup_joining_request_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUpdateManyWithoutCreated_byNestedInput
    notice_board_details?: notice_board_detailsUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsUncheckedUpdateWithoutGroup_joining_request_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUncheckedUpdateManyWithoutCreated_byNestedInput
    notice_board_details?: notice_board_detailsUncheckedUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUncheckedUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsCreateWithoutNotice_board_detailsInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutUserInput
    user_cohort_mapping?: user_cohort_mappingCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsUncheckedCreateWithoutNotice_board_detailsInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsUncheckedCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutUserInput
    user_cohort_mapping?: user_cohort_mappingUncheckedCreateNestedManyWithoutUserInput
    user_group_mapping?: user_group_mappingUncheckedCreateNestedManyWithoutUser_detailsInput
  }

  export type user_detailsCreateOrConnectWithoutNotice_board_detailsInput = {
    where: user_detailsWhereUniqueInput
    create: XOR<user_detailsCreateWithoutNotice_board_detailsInput, user_detailsUncheckedCreateWithoutNotice_board_detailsInput>
  }

  export type user_detailsUpsertWithoutNotice_board_detailsInput = {
    update: XOR<user_detailsUpdateWithoutNotice_board_detailsInput, user_detailsUncheckedUpdateWithoutNotice_board_detailsInput>
    create: XOR<user_detailsCreateWithoutNotice_board_detailsInput, user_detailsUncheckedCreateWithoutNotice_board_detailsInput>
    where?: user_detailsWhereInput
  }

  export type user_detailsUpdateToOneWithWhereWithoutNotice_board_detailsInput = {
    where?: user_detailsWhereInput
    data: XOR<user_detailsUpdateWithoutNotice_board_detailsInput, user_detailsUncheckedUpdateWithoutNotice_board_detailsInput>
  }

  export type user_detailsUpdateWithoutNotice_board_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutUserNestedInput
    user_cohort_mapping?: user_cohort_mappingUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutUser_detailsNestedInput
  }

  export type user_detailsUncheckedUpdateWithoutNotice_board_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUncheckedUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutUserNestedInput
    user_cohort_mapping?: user_cohort_mappingUncheckedUpdateManyWithoutUserNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutUser_detailsNestedInput
  }

  export type group_detailsCreateWithoutUser_group_mappingInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by: user_detailsCreateNestedOneWithoutGroup_detailsInput
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutGroupInput
  }

  export type group_detailsUncheckedCreateWithoutUser_group_mappingInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    admin_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type group_detailsCreateOrConnectWithoutUser_group_mappingInput = {
    where: group_detailsWhereUniqueInput
    create: XOR<group_detailsCreateWithoutUser_group_mappingInput, group_detailsUncheckedCreateWithoutUser_group_mappingInput>
  }

  export type user_detailsCreateWithoutUser_group_mappingInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingCreateNestedManyWithoutUserInput
  }

  export type user_detailsUncheckedCreateWithoutUser_group_mappingInput = {
    id?: string
    email: string
    password: string
    frist_name: string
    last_name: string
    refreshToken?: string | null
    role: $Enums.ROLE
    github_link: string
    hashnode_link: string
    peerlist_link: string
    tweeter_link: string
    group_details?: group_detailsUncheckedCreateNestedManyWithoutCreated_byInput
    group_joining_request_details?: group_joining_request_detailsUncheckedCreateNestedManyWithoutUserInput
    notice_board_details?: notice_board_detailsUncheckedCreateNestedManyWithoutHandled_byInput
    user_cohort_mapping?: user_cohort_mappingUncheckedCreateNestedManyWithoutUserInput
  }

  export type user_detailsCreateOrConnectWithoutUser_group_mappingInput = {
    where: user_detailsWhereUniqueInput
    create: XOR<user_detailsCreateWithoutUser_group_mappingInput, user_detailsUncheckedCreateWithoutUser_group_mappingInput>
  }

  export type group_detailsUpsertWithoutUser_group_mappingInput = {
    update: XOR<group_detailsUpdateWithoutUser_group_mappingInput, group_detailsUncheckedUpdateWithoutUser_group_mappingInput>
    create: XOR<group_detailsCreateWithoutUser_group_mappingInput, group_detailsUncheckedCreateWithoutUser_group_mappingInput>
    where?: group_detailsWhereInput
  }

  export type group_detailsUpdateToOneWithWhereWithoutUser_group_mappingInput = {
    where?: group_detailsWhereInput
    data: XOR<group_detailsUpdateWithoutUser_group_mappingInput, group_detailsUncheckedUpdateWithoutUser_group_mappingInput>
  }

  export type group_detailsUpdateWithoutUser_group_mappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: user_detailsUpdateOneRequiredWithoutGroup_detailsNestedInput
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutGroupNestedInput
  }

  export type group_detailsUncheckedUpdateWithoutUser_group_mappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type user_detailsUpsertWithoutUser_group_mappingInput = {
    update: XOR<user_detailsUpdateWithoutUser_group_mappingInput, user_detailsUncheckedUpdateWithoutUser_group_mappingInput>
    create: XOR<user_detailsCreateWithoutUser_group_mappingInput, user_detailsUncheckedCreateWithoutUser_group_mappingInput>
    where?: user_detailsWhereInput
  }

  export type user_detailsUpdateToOneWithWhereWithoutUser_group_mappingInput = {
    where?: user_detailsWhereInput
    data: XOR<user_detailsUpdateWithoutUser_group_mappingInput, user_detailsUncheckedUpdateWithoutUser_group_mappingInput>
  }

  export type user_detailsUpdateWithoutUser_group_mappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUpdateManyWithoutUserNestedInput
  }

  export type user_detailsUncheckedUpdateWithoutUser_group_mappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frist_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    github_link?: StringFieldUpdateOperationsInput | string
    hashnode_link?: StringFieldUpdateOperationsInput | string
    peerlist_link?: StringFieldUpdateOperationsInput | string
    tweeter_link?: StringFieldUpdateOperationsInput | string
    group_details?: group_detailsUncheckedUpdateManyWithoutCreated_byNestedInput
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutUserNestedInput
    notice_board_details?: notice_board_detailsUncheckedUpdateManyWithoutHandled_byNestedInput
    user_cohort_mapping?: user_cohort_mappingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type group_detailsCreateManyCreated_byInput = {
    id?: string
    group_name: string
    group_desc: string
    is_published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_joining_request_detailsCreateManyUserInput = {
    id?: string
    group_id: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
  }

  export type notice_board_detailsCreateManyHandled_byInput = {
    id?: string
    board_text?: string | null
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type user_cohort_mappingCreateManyUserInput = {
    id?: string
    cohort_id: string
  }

  export type user_group_mappingCreateManyUser_detailsInput = {
    id?: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
  }

  export type group_detailsUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_joining_request_details?: group_joining_request_detailsUpdateManyWithoutGroupNestedInput
    user_group_mapping?: user_group_mappingUpdateManyWithoutGroup_detailsNestedInput
  }

  export type group_detailsUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_joining_request_details?: group_joining_request_detailsUncheckedUpdateManyWithoutGroupNestedInput
    user_group_mapping?: user_group_mappingUncheckedUpdateManyWithoutGroup_detailsNestedInput
  }

  export type group_detailsUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_desc?: StringFieldUpdateOperationsInput | string
    is_published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_joining_request_detailsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: group_detailsUpdateOneRequiredWithoutGroup_joining_request_detailsNestedInput
  }

  export type group_joining_request_detailsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_joining_request_detailsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notice_board_detailsUpdateWithoutHandled_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notice_board_detailsUncheckedUpdateWithoutHandled_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notice_board_detailsUncheckedUpdateManyWithoutHandled_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_text?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_cohort_mappingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort?: cohort_detailsUpdateOneRequiredWithoutUserCohortsNestedInput
  }

  export type user_cohort_mappingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_cohort_mappingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohort_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_group_mappingUpdateWithoutUser_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
    group_details?: group_detailsUpdateOneRequiredWithoutUser_group_mappingNestedInput
  }

  export type user_group_mappingUncheckedUpdateWithoutUser_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_group_mappingUncheckedUpdateManyWithoutUser_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type group_joining_request_detailsCreateManyGroupInput = {
    id?: string
    user_id: string
    request_note_by_user?: string | null
    rejection_remark?: string | null
    requested_on?: Date | string | null
    responded_on?: Date | string | null
  }

  export type user_group_mappingCreateManyGroup_detailsInput = {
    id?: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joining_date?: Date | string | null
    leaving_date?: Date | string | null
    leaving_reason?: string | null
    removed_reason?: string | null
    removed_date?: Date | string | null
    is_active_member?: boolean | null
  }

  export type group_joining_request_detailsUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: user_detailsUpdateOneRequiredWithoutGroup_joining_request_detailsNestedInput
  }

  export type group_joining_request_detailsUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_joining_request_detailsUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    request_note_by_user?: NullableStringFieldUpdateOperationsInput | string | null
    rejection_remark?: NullableStringFieldUpdateOperationsInput | string | null
    requested_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responded_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_group_mappingUpdateWithoutGroup_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_details?: user_detailsUpdateOneRequiredWithoutUser_group_mappingNestedInput
  }

  export type user_group_mappingUncheckedUpdateWithoutGroup_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_group_mappingUncheckedUpdateManyWithoutGroup_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaving_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active_member?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_cohort_mappingCreateManyCohortInput = {
    id?: string
    user_id: string
  }

  export type user_cohort_mappingUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: user_detailsUpdateOneRequiredWithoutUser_cohort_mappingNestedInput
  }

  export type user_cohort_mappingUncheckedUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_cohort_mappingUncheckedUpdateManyWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}