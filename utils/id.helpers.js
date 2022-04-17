import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";

export const createSpaceId = customAlphabet(alphanumeric, 12);
export const createRandomId = customAlphabet(alphanumeric, 6);

export const createHeroId = (userId, spaceId, randomId) =>
  `user:${userId}/space:${spaceId}__type:hero__id:${randomId}`;

export const createAudioId = (userId, spaceId, randomId) =>
  `user:${userId}/space:${spaceId}__type:audio__id:${randomId}`;
