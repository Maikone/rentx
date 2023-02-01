import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRentals1675215105120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rentals",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "car_id",
                        type: "uuid",
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "start_date",
                        type: "timestamp()",
                        default: "now()"
                    },
                    {
                        name: "end_date",
                        type: "timestamp()",
                    },
                    {
                        name: "expected_return_date",
                        type: "timestamp()",
                    },
                    {
                        name: "total",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp()",
                        default: "now()"
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
