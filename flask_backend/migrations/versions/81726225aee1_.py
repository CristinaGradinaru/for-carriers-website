"""empty message

Revision ID: 81726225aee1
Revises: 8c616daa94ef
Create Date: 2021-04-06 21:37:03.906351

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '81726225aee1'
down_revision = '8c616daa94ef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('order', sa.Column('image', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('order', 'image')
    # ### end Alembic commands ###