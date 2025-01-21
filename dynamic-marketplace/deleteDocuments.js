
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'tewzmmy2',  // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name (e.g., 'production')
  token: 'skSrWJWnxYk8LfJGFHQD1QgfuR0fwX7TtnGswTNbsRxGd5ncEXKhrKtqx0dAjsVkmCcX8OeJivUNk5Mi29Tfp4EPJiuQo0qiWxvodGVV5AvRrpcnw7CzYiFPcxz4FAMxHlWPlID9JCtj7TCafoLfKCilSQ1DjLJKcSnt5GXa3NtjORsWVYjE',      // Optional: Use an authentication token for deletion
  useCdn: false,                 // Set to false for using the latest data
});

async function deleteDocuments() {
  try {
    // Query to get all 'product' documents
    const products = await client.fetch('*[_type == "product"]');
    
    // Deleting each document
    for (const product of products) {
      await client.delete(product._id);
      console.log(`Deleted product with ID: ${product._id}`);
    }
  } catch (err) {
    console.error('Error deleting documents:', err);
  }
}

deleteDocuments();