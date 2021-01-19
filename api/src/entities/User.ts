import { Field, ID, ObjectType } from "type-graphql";
import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
	VersionColumn,
	
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@ObjectType()
@Entity({ name: "user" })
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn()
	id: string;

	@Field()
	@Column()
	firstName: string;

	@Field()
	@Column()
	lastName: string;

	@Field()
	@Column("text", { unique: true })
	email: string;

	@Field()
	@Column("bigint")
	joinDate: number;

	@Column()
	password: string;
	@CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
    @VersionColumn()
    version!: number;

	@BeforeInsert()
	addId() {
		this.id = uuidv4();
	}

	@BeforeInsert()
	setJoinDate() {
		this.joinDate = Date.now();
	}
}
