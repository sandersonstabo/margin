import { modes } from "@/lib/constants";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    nodes: defineTable({
        mode: v.union(...Object.values(modes).map((mode) => v.literal(mode))),
        
        relations: v.object({
            parent: v.optional(v.id("nodes"))
        })
    })
});