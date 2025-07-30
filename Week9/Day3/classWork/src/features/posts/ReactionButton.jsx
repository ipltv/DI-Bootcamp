import { addReaction } from './state/postSlice'
import { useDispatch } from 'react-redux';
import { memo } from 'react';
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const Reaction = ({ id, reactions }) => {
  console.log("render post => ", id);
  const dispatch = useDispatch();

  const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} className='reactionButton' onClick={() => { dispatch(addReaction({ id, name })) }}>{emoji} {reactions[name]}</button>
    )
  })
  return (
    <div>{renderReaction}</div>
  )
}

export default memo(Reaction);