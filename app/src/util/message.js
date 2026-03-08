/**
 * Filters the global message list by a specific room topic.
 * @param {Array} messages
 * @param {string} roomTopic
 * @returns {Array}
 */
export function filterRoomMessages(messages, roomTopic) {
  if (!messages || !roomTopic) return [];

  // Filter by topic
  const roomMessages = messages.filter((msg) => msg.roomTopic === roomTopic);

  return roomMessages;
}

/**
 * Filters out duplicate messages based on their unique ID and sorts them by timestamp.
 * @param {Array<Object>} d
 * @returns {Array<Object>}
 */
export function filterDuplicatesAndSortMessages(d) {
  const filtered = Array.from(
    d
      .reduce((map, item) => {
        // Create a unique key based on content since there is no ID
        // Format: "SenderID-Timestamp-First10Chars"
        const compositeKey = `${item.memberId}-${item.timestamp}-${item.message?.substring(0, 10)}`;

        const itemTimestamp = new Date(item.timestamp).getTime();
        const existingItem = map.get(compositeKey);

        const existingTimestamp = existingItem
          ? new Date(existingItem.timestamp).getTime()
          : 0;

        // Only add if it's new or has a more recent timestamp for that same content
        if (!existingItem || itemTimestamp > existingTimestamp) {
          map.set(compositeKey, item);
        }

        return map;
      }, new Map())
      .values(),
  );

  // Sort Descending (Newest at the top)
  return filtered.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );
}

/**
 * Gets the single most recent message for a room in a single pass.
 * @param {Array} messages
 * @param {string} roomTopic
 * @returns {Object|null}
 */
export function getLatestMessageByRoomId(messages, roomTopic) {
  if (!messages || messages.length === 0) return null;

  return messages.reduce((latest, current) => {
    if (current.roomTopic !== roomTopic) return latest;
    if (!latest) return current;

    const currentTS = new Date(current.timestamp).getTime();
    const latestTS = new Date(latest.timestamp).getTime();

    return currentTS > latestTS ? current : latest;
  }, null);
}
