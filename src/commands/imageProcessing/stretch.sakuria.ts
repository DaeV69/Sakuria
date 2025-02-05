import { IMessage } from "../../types";
import Discord from "discord.js";
import { getBufferFromUrl, getImageURLFromMessage } from "../../logic/logic.sakuria";
import { stretch } from "../../logic/imageProcessors.sakuria";

export default {
  name: "stretch",
  description: "Stretch an attachment, url, emoji or avatar",
  requiresProcessing: true,
  execute: async (message: IMessage): Promise<string | Discord.ReplyMessageOptions> => {
    const imageURL = await getImageURLFromMessage(message);
    const targetBuffer = await getBufferFromUrl(imageURL);
    return { files: [await stretch(targetBuffer)] };
  },
};
