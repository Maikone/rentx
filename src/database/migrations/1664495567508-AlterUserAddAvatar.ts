import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserAddAvatar1664495567508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users",
            new TableColumn({
                name: "varchar",
                type: "varchar",
                isNullable: true,
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "avatar");
    }

}
