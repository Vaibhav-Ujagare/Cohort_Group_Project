-- AlterTable
ALTER TABLE "user_details" ALTER COLUMN "github_link" DROP NOT NULL,
ALTER COLUMN "hashnode_link" DROP NOT NULL,
ALTER COLUMN "peerlist_link" DROP NOT NULL,
ALTER COLUMN "tweeter_link" DROP NOT NULL;
