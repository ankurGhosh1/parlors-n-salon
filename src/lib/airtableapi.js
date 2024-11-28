// lib/airtable.js
import base from "../../airtable";

export async function fetchPosts() {
  const records = await base("Salon Location")
    .select({ view: "Grid view" })
    .all();
  return records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
}

export async function fetchPost(id) {
  const record = await base("Salon Location").find(id);
  return {
    id: record.id,
    fields: record.fields,
  };
}

export async function fetchPostBySlug(slug) {
  const records = await base("Salon Location")
    .select({
      filterByFormula: `{slug} = '${slug}'`,
      maxRecords: 1,
    })
    .all();

  if (records.length > 0) {
    return {
      id: records[0].id,
      fields: records[0].fields,
    };
  } else {
    return null;
  }
}
