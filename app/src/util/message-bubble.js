export function isTopMessage(messages, index) {
  const message = messages.at(index);
  const nextMessage = messages.at(index + 1);

  if (index === messages.length - 1) return true;
  if (nextMessage?.memberId === message?.memberId) return false;

  return true;
}

export function isBottomMessage(messages, index) {
  const message = messages.at(index);
  const previousMessage = messages.at(index - 1);

  if (index === 0) return true;
  if (previousMessage?.memberId === message?.memberId) return false;

  return true;
}
