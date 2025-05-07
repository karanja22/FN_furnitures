import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1746534196112 implements MigrationInterface {
    name = 'Init1746534196112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "updated_at"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "products_id_seq" OWNED BY "products"."id"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "id" SET DEFAULT nextval('"products_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "id" SET DEFAULT nextval('products_id_seq1')`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "products_id_seq"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ADD "created_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image_url" text`);
    }

}
