import { FC, MutableRefObject } from 'react'
import { boxShadow } from '../utils/styleHelper'
import ChatIcon from '@mui/icons-material/Chat'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { Post } from '../types/global'

type Props = {
  className?: string
  post: Post
}

const SC = {
  PostItem: styled('li')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: '180px',
    background: '#fff',
    borderRadius: '3px',
    boxShadow: [boxShadow],
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.7',
    },
  })),
  PostImageWrapper: styled('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: '8px',
    minWidth: '200px',
  })),
  PostMainWrapper: styled('div')(({ theme }) => ({
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  })),
  PostTitle: styled('h2')(({ theme }) => ({
    fontSize: '20px',
  })),
  PostContents: styled('p')(({ theme }) => ({
    fontSize: '14px',
    overflow: 'hidden',
    minHeight: '64px',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
  })),
  PostMetaInfo: styled('div')(({ theme }) => ({
    display: 'flex',
    fontSize: '12px',
    columnGap: '8px',
  })),
  PostCommentInfoWrapper: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
  })),
  PostCommentIcon: styled(ChatIcon)(({ theme }) => ({
    fontSize: '16px',
    marginRight: '4px',
  })),
}

const PostItem: FC<Props> = ({ className, post }) => {
  return (
    <SC.PostItem className={className}>
      <SC.PostImageWrapper>
        <img src="#" />
      </SC.PostImageWrapper>
      <SC.PostMainWrapper>
        <SC.PostTitle>{post.title}</SC.PostTitle>
        <SC.PostContents>{post.contents}</SC.PostContents>
        <SC.PostMetaInfo>
          <span>{post.categoryName}</span>
          <span>{post.createdAt}</span>
          <SC.PostCommentInfoWrapper>
            <SC.PostCommentIcon />
            {post.comments?.length || 0}
          </SC.PostCommentInfoWrapper>
        </SC.PostMetaInfo>
      </SC.PostMainWrapper>
    </SC.PostItem>
  )
}

export default PostItem
