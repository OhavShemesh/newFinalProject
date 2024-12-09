import { Box, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'


export default function UpdateProductComponent({ allProducts, handleFetchProductId, toTitleCase }) {

    return (
        <Box sx={{ width: "80%", margin: "auto" }}>

            <Grid container spacing={3} px={3} pb={5} justifyContent="center">
                {allProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={product._id}>
                        <Card sx={{
                            borderRadius: "40px",
                            border: "1px solid",
                            borderColor: "black"

                        }}>
                            <CardActionArea
                                onClick={() => handleFetchProductId(product._id)}
                                sx={{
                                    borderRadius: "40px",
                                    width: "100%",
                                    backgroundColor: 'white',
                                }}>
                                <CardContent sx={{ textAlign: "center", fontWeight: "bold", fontSize: { xs: "18px", sm: "20px", md: "24px" }, height: "20px" }}>
                                    {toTitleCase(product?.name)}
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    image={product.image.url}
                                    alt={product.image.alt}
                                    sx={{ height: 250, objectFit: "fill" }}
                                />
                            </CardActionArea>

                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Box>
    )
}
