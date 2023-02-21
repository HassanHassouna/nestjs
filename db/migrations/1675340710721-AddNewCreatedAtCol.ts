import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewCreatedAtCol1675340710721 implements MigrationInterface {
  name = 'AddNewCreatedAtCol1675340710721';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
  }
}
