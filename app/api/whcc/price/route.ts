import { NextResponse } from "next/server";

const WHCC_BASE_URL = "https://sandbox.apps.whcc.com";

export async function GET() {
  try {
    const consumerKey = process.env.WHCC_CONSUMER_KEY;
    const consumerSecret = process.env.WHCC_CONSUMER_SECRET;

    if (!consumerKey || !consumerSecret) {
      return NextResponse.json(
        { error: "WHCC credentials are missing." },
        { status: 500 }
      );
    }

    const tokenUrl = new URL(`${WHCC_BASE_URL}/api/AccessToken`);

    tokenUrl.searchParams.set("grant_type", "consumer_credentials");
    tokenUrl.searchParams.set("consumer_key", consumerKey);
    tokenUrl.searchParams.set("consumer_secret", consumerSecret);

    const tokenResponse = await fetch(tokenUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: "WHCC authentication failed." },
        { status: 500 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.Token;

    if (!accessToken) {
      return NextResponse.json(
        { error: "WHCC did not return an access token." },
        { status: 500 }
      );
    }

    const catalogResponse = await fetch(
      `${WHCC_BASE_URL}/api/catalog/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    if (!catalogResponse.ok) {
      return NextResponse.json(
        { error: "WHCC catalog request failed." },
        { status: 500 }
      );
    }

    const catalog = await catalogResponse.json();

    const categories = Array.isArray(catalog.Categories)
      ? catalog.Categories
      : [];

    const galleryWrapCategory = categories.find(
      (category: any) => category.Name === "Gallery Wraps"
    );

    const products = Array.isArray(galleryWrapCategory?.ProductList)
      ? galleryWrapCategory.ProductList
      : [];

    const product = products.find(
      (item: any) =>
        item.Name?.includes("Fine Art Canvas Gallery Wrap 20x30")
    );

    const shippingCategory = categories.find(
  (category: any) => category.Name === "Shipping"
);

const orderCategories = Array.isArray(
  shippingCategory?.OrderAttributeCategoryList
)
  ? shippingCategory.OrderAttributeCategoryList
  : [];

    return NextResponse.json({
      success: true,

      product: product
        ? {
            name: product.Name,
            productUID: product.Id,
          }
        : null,

      orderAttributeCategories: orderCategories.map((category: any) => ({
        id: category.Id,
        name: category.AttributeCategoryName,
        requiredLevel: category.RequiredLevel,

        attributes: Array.isArray(category.Attributes)
          ? category.Attributes.map((attribute: any) => ({
              id: attribute.Id,
              name: attribute.AttributeName,
            }))
          : [],
      })),
    });
  } catch (error) {
    console.error("WHCC price setup error:", error);

    return NextResponse.json(
      { error: "Unexpected WHCC price setup error." },
      { status: 500 }
    );
  }
}