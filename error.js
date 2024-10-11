try {
    console.log("Trying...");
    // Code that may throw an error
    throw new Error("Something went wrong!");
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("This will run no matter what."); 
}
