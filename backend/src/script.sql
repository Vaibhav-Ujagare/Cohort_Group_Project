CREATE TABLE "user_details" (
    "id" SERIAL PRIMARY KEY ,
    "email" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "frist_name" varchar(255) NOT NULL,
    "last_name" varchar(255) NOT NULL,
    "role" varchar(255) NOT NULL,
    "github_link" varchar(255) NOT NULL,
    "hashnode_link" varchar(255) NOT NULL,
    "peerlist_link" varchar(255) NOT NULL,
    "tweeter_link" varchar(255) NOT NULL
);


CREATE TABLE "cohort_details" (
    "id" SERIAL PRIMARY key ,
    "cohort_name" varchar(255) unique NOT NULL      
);


-- CreateTable
CREATE TABLE "group_details" (
    "id"  SERIAL PRIMARY key ,
    "group_name" varchar(255) NOT NULL,
    "group_desc" varchar(255) NOT NULL,
    "is_published" BOOLEAN NOT NULL,
    "admin_id" integer NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL
);

-- CreateTable
CREATE TABLE "notice_board_details" (
    "id" SERIAL PRIMARY key ,
    "board_varchar(255)" varchar(255) NOT NULL,
    "group_id" integer NOT NULL,
    "user_id" integer NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL

);

CREATE TABLE "user_group_mapping" (
    "id" SERIAL PRIMARY key ,
    "group_id" integer NOT NULL,
    "user_id" integer NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,
    "joining_date" TIMESTAMP,
    "leaving_date" TIMESTAMP,
    "leaving_reason" varchar(255),
    "removed_reason" varchar(255),
    "removed_date" TIMESTAMP,
    "is_active_member" BOOLEAN DEFAULT false

);

CREATE TABLE "user_cohort_mapping" (
  "id" SERIAL PRIMARY key,
  "user_id" integer NOT NULL,
  "cohort_id" integer NOT NULL
  
);

--action, id, board_text, group_id, user_id, created_at, updated_at
CREATE TABLE "notice_board_details_audit" (
 	"audit_id"     SERIAL PRIMARY KEY,
    "action"       VARCHAR(10) NOT NULL,   
    "id" integer ,
    "board_text" varchar(255) ,
    "group_id" integer ,
    "user_id" integer ,
    "created_at" TIMESTAMP ,
    "updated_at" TIMESTAMP ,
    "changed_at"   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE "group_joining_request_details" (
 	"id"     SERIAL PRIMARY KEY,
    "group_id" integer not null,
    "user_id" integer not null,
    "request_note_by_user" varchar(255),
    "rejection_remark" varchar(255),
	"requested_on" timestamp,
	"responded_on" timestamp    
);


CREATE TABLE user_group_mapping_audit (
    audit_id          SERIAL PRIMARY KEY,
    action            VARCHAR(10) NOT NULL, -- INSERT, UPDATE, DELETE
    id                INTEGER,
    group_id          integer,
    user_id           integer,
    created_at        TIMESTAMP,
    updated_at        TIMESTAMP,
    joining_date      TIMESTAMP,
    leaving_date      TIMESTAMP,
    leaving_reason    VARCHAR(255),
    removed_reason    VARCHAR(255),
    removed_date      TIMESTAMP,
    is_active_member  BOOLEAN,
    changed_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



ALTER TABLE cohort_group_portal.user_cohort_mapping ADD CONSTRAINT "user_cohort_mapping_user_fkey" FOREIGN KEY (user_id) REFERENCES cohort_group_portal.user_details(id) ON DELETE CASCADE ON UPDATE CASCADE;
--ALTER TABLE cohort_group_portal.user_cohort_mapping ADD CONSTRAINT user_cohort_mapping_user_details_fk FOREIGN KEY (id) REFERENCES cohort_group_portal.user_details(id);


ALTER TABLE cohort_group_portal.user_cohort_mapping ADD CONSTRAINT "user_cohort_mapping_cohort_fkey" FOREIGN KEY (cohort_id) REFERENCES cohort_group_portal.cohort_details(id) ON DELETE CASCADE ON UPDATE CASCADE;


-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON user_details(email);

-- AddForeignKey
ALTER TABLE cohort_group_portal.group_details ADD CONSTRAINT "Group_admin_id_fkey" FOREIGN KEY (admin_id) REFERENCES user_details(id) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE cohort_group_portal.notice_board_details ADD CONSTRAINT "notice_board_details_user_id_fkey" FOREIGN KEY (user_id) REFERENCES user_details(id) ON DELETE CASCADE ON UPDATE CASCADE;


-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON group_details(group_name);

-- AddForeignKey
ALTER TABLE cohort_group_portal.user_group_mapping ADD CONSTRAINT "Usergroupmapping_group_id_fkey" FOREIGN KEY (group_id) REFERENCES group_details(id) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE cohort_group_portal.user_group_mapping ADD CONSTRAINT "Usergroupmapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES user_details(id) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE UNIQUE INDEX single_group_per_user_constraint
ON cohort_group_portal.user_group_mapping(user_id)
WHERE is_active_member = 'y';



CREATE OR REPLACE FUNCTION audit_notice_board()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO cohort_group_portal.notice_board_audit(action, id, board_text, group_id, user_id, created_at, updated_at)
        VALUES ('INSERT', NEW.id, NEW.board_text, NEW.group_id, NEW.user_id, NEW.created_at, NEW.updated_at);
        RETURN NEW;

    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO cohort_group_portal.notice_board_audit(action, id, board_text, group_id, user_id, created_at, updated_at)
        VALUES ('UPDATE', NEW.id, NEW.board_text, NEW.group_id, NEW.user_id, NEW.created_at, NEW.updated_at);
        RETURN NEW;

    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO cohort_group_portal.notice_board_audit(action, id, board_text, group_id, user_id, created_at, updated_at)
        VALUES ('DELETE', OLD.id, OLD.board_text, OLD.group_id, OLD.user_id, OLD.created_at, OLD.updated_at);
        RETURN OLD;
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_audit_notice_board
AFTER INSERT OR UPDATE OR DELETE ON notice_board_details
FOR EACH ROW
EXECUTE FUNCTION audit_notice_board();


CREATE OR REPLACE FUNCTION audit_user_group_mapping()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO cohort_group_portal.user_group_mapping_audit(action, id, group_id, user_id, created_at, updated_at,
                                             joining_date, leaving_date, leaving_reason,
                                             removed_reason, removed_date, is_active_member)
        VALUES ('INSERT', NEW.id, NEW.group_id, NEW.user_id, NEW.created_at, NEW.updated_at,
                NEW.joining_date, NEW.leaving_date, NEW.leaving_reason,
                NEW.removed_reason, NEW.removed_date, NEW.is_active_member);
        RETURN NEW;

    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO cohort_group_portal.user_group_mapping_audit(action, id, group_id, user_id, created_at, updated_at,
                                             joining_date, leaving_date, leaving_reason,
                                             removed_reason, removed_date, is_active_member)
        VALUES ('UPDATE', NEW.id, NEW.group_id, NEW.user_id, NEW.created_at, NEW.updated_at,
                NEW.joining_date, NEW.leaving_date, NEW.leaving_reason,
                NEW.removed_reason, NEW.removed_date, NEW.is_active_member);
        RETURN NEW;

    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO cohort_group_portal.user_group_mapping_audit(action, id, group_id, user_id, created_at, updated_at,
                                             joining_date, leaving_date, leaving_reason,
                                             removed_reason, removed_date, is_active_member)
        VALUES ('DELETE', OLD.id, OLD.group_id, OLD.user_id, OLD.created_at, OLD.updated_at,
                OLD.joining_date, OLD.leaving_date, OLD.leaving_reason,
                OLD.removed_reason, OLD.removed_date, OLD.is_active_member);
        RETURN OLD;
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_audit_user_group_mapping
AFTER INSERT OR UPDATE OR DELETE ON user_group_mapping
FOR EACH ROW
EXECUTE FUNCTION audit_user_group_mapping();









const cohort = await db.cohort_details.create({
                data: {
                    cohort_name: data.Cohort_Name,
                },
            });

            const user = await db.user_details.create({
                data: {
                    email: data.Email,
                    password: data.Password,
                    frist_name: data.first_name,
                    last_name: data.last_name,
                    github_link: data.github_link,
                    hashnode_link: data.hashnode_link,
                    peerlist_link: data.peerlist_link,
                    tweeter_link: data.tweeter_link,
                    role: ROLE.MEMBER,
                },
            });

            const user_cohort_mapping = await db.user_cohort_mapping.create({
                data: {
                    user_id: user.id,
                    cohort_id: cohort.id,
                },
            });