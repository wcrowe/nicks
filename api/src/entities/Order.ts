import { Field, ID, ObjectType } from "type-graphql";
import {
	BaseEntity,
	BeforeInsert,
	Column,
    CreateDateColumn,
	Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
    VersionColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@ObjectType()
@Entity({ name: "order" })
@Unique(['ordernum'])
export class Order extends BaseEntity {
	@Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

	@Field()
	@Column()
	ordernum: string;

	@Field()
	@Column("date")
	orderDate: string;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
    @VersionColumn()
    version!: number;
    
	// @BeforeInsert()
	// addId() {
	// 	this.id = uuidv4();
	// }

	@BeforeInsert()
	setJoinDate() {
        let time = new Date(Date.now());
		this.orderDate = time.toISOString();
	}
}
